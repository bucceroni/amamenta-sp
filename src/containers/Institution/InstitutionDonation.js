import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button, Snackbar, TextField } from "@material-ui/core";

import MUIDataTable from "mui-datatables";

const styles = theme => ({});

class InstitutionDonation extends Component {
  state = {
    amount_out: ""
  };
  componentDidMount() {
    const { actions, userInstitution } = this.props;
    actions.getDonationInstitution(userInstitution.institution_id);
    actions.getStockInstitution(userInstitution.institution_id);
  }

  handleWait = (donation_user_id, indexId) => {
    const { actions, userInstitution } = this.props;
    actions.postDonationsInstitutionWait(
      donation_user_id,
      userInstitution.institution_id,
      indexId
    );
  };

  handleWithDraw = donation_user_id => {
    const { actions, userInstitution } = this.props;
    actions.postDonationsInstitutionWithDraw(
      donation_user_id,
      userInstitution.institution_id
    );
  };

  handleChangeAmountOut = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = (amount_out, institution_balance_id) => {
    const { actions } = this.props;
    actions.postStockInstitution(amount_out, institution_balance_id);
    this.setState({amount_out: ""})
  };

  handleCloseSnackbar = () => {
    const { actions } = this.props;
    actions.closeSnackbarDonationInstitution();
  };

  render() {
    const { amount_out } = this.state;
    const {
      donationInstitution,
      openSnackbar,
      message,
      stockInstitution
    } = this.props;
    const options = {
      textLabels: {
        body: {
          noMatch: "Nenhum resultado encontrado",
          toolTip: "Classificar"
        },
        toolbar: {
          search: "Pesquisar",
          downloadCsv: "Download CSV",
          print: "Imprimir",
          viewColumns: "Visualizar",
          filterTable: "Filtrar"
        },
        filter: {
          all: "Todos",
          title: "Filtros",
          reset: "Limpar"
        },
        viewColumns: {
          title: "Colunas",
          titleAria: "Colunas"
        }
      },
      responsive: "scroll",
      caseSensitive: false,
      fixedHeader: true,
      pagination: true,
      rowsPerPage: 10,
      resizableColumns: false,
      rowHover: true,
      sortFilterList: true,
      serverSide: false,
      sort: true,
      search: true,
      print: true,
      download: true,
      downloadOptions: { filename: "Doações.csv", separator: "," },
      filter: false,
      viewColumns: false,
      selectableRows: false
    };

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Doações - Institutição
        </Typography>
        <br />
        <Typography variant="display6" gutterBottom>
          Estoque disponível dos doadores
        </Typography>
        {donationInstitution && donationInstitution.length > 0 && (
          <Grid item xs={12}>
            <MUIDataTable
              title={
                <Typography variant="subheading" gutterBottom>
                  Filtrar
                </Typography>
              }
              data={donationInstitution
                .filter(item => item.status === "PENDING")
                .map((item, index) => {
                  return [
                    item.amount_entry + item.unit,
                    item.date_entry,
                    item.name,
                    <Button
                      color="primary"
                      onClick={() =>
                        this.handleWait(item.donation_user_id, index)
                      }
                    >
                      Reservar
                    </Button>
                  ];
                })}
              columns={[
                "Quantidade",
                "Data de entrada",
                "Doador",
                "Agendar Retirada"
              ]}
              options={options}
            />
          </Grid>
        )}
        <br />
        <Typography variant="display6" gutterBottom>
          Doações reservadas
        </Typography>
        {donationInstitution && donationInstitution.length > 0 && (
          <Grid item xs={12}>
            <MUIDataTable
              title={
                <Typography variant="subheading" gutterBottom>
                  Filtrar
                </Typography>
              }
              data={donationInstitution
                .filter(item => item.status === "ATIVE")
                .map(item => {
                  return [
                    item.amount_entry + item.unit,
                    item.date_entry,
                    item.name,
                    <Button
                      color="primary"
                      onClick={() => this.handleWithDraw(item.donation_user_id)}
                    >
                      Disponível para doação
                    </Button>
                  ];
                })}
              columns={["Quantidade", "Data de entrada", "Doador", "Retirar"]}
              options={options}
            />
          </Grid>
        )}
        <br />

        <Typography variant="title" gutterBottom>
          {`Estoque disponível para doação: ${
            stockInstitution.amount_available
          }ml`}
        </Typography>

        <TextField
          fullWidth
          id="amount_out"
          label="Quantidade de Leite ml"
          margin="normal"
          variant="outlined"
          value={amount_out}
          onChange={this.handleChangeAmountOut("amount_out")}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() =>
            this.handleSubmit(
              amount_out,
              stockInstitution.institution_balance_id
            )
          }
        >
          Doar
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={this.handleCloseSnackbar}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{message}</span>}
        />
      </div>
    );
  }
}

InstitutionDonation.propTypes = {
  user: PropTypes.object,
  donationInstitution: PropTypes.array,
  userInstitution: PropTypes.object,
  openSnackbar: PropTypes.bool,
  message: PropTypes.string
};

const mapStateToProps = state => {
  return {
    user: state.login.user,
    donationInstitution: state.donationInstitution.donationInstitution,
    userInstitution: state.user.userInstitution,
    openSnackbar: state.donationInstitution.openSnackbar,
    message: state.donationInstitution.message,
    stockInstitution: state.donationInstitution.stockInstitution
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...actions
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(InstitutionDonation));
