import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button, Snackbar } from "@material-ui/core";

import MUIDataTable from "mui-datatables";

const styles = theme => ({});

class InstitutionDonation extends Component {
  state={
    amount_out: 100
  }
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

  handleSubmit = (amount_out, institution_balance_id) => {
    const { actions } = this.props;
    actions.postStockInstitution(amount_out, institution_balance_id)
  };

  handleCloseSnackbar = () => {
    const { actions } = this.props;
    actions.closeSnackbarDonationInstitution();
  };

  render() {
    const { donationInstitution, openSnackbar, message, stockInstitution } = this.props;
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
      rowsPerPage: 25,
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
        <Typography variant="display1" gutterBottom>
          AGENDAR
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
                .filter((item) => item.status === "PENDING")
                .map((item, index) => {
                  return [
                    item.amount_entry + item.unit,
                    item.date_entry,
                    item.name,
                    <Button
                      color="primary"
                      onClick={() => this.handleWait(item.donation_user_id, index)}
                    >
                      Agendar
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
        {donationInstitution && donationInstitution.length > 0 && (
          <Grid item xs={12}>
            <Typography variant="display1" gutterBottom>
              AGUARDAR RETIRADA
            </Typography>
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
                      Retirado
                    </Button>
                  ];
                })}
              columns={["Quantidade", "Data de entrada", "Doador", "Retirar"]}
              options={options}
            />
          </Grid>
        )}
        <br />
        <Typography variant="display1" gutterBottom>
          {`ESTOQUE DISPONÍVEL =${stockInstitution.amount_available}ml`}
        </Typography>

        <Button onClick={() => this.handleSubmit(this.state.amount_out, stockInstitution.institution_balance_id)}>Retirar do Estoque disponível</Button>

        

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
        {/* <Button color="primary" onClick={this.handleUnselectInstitution}>
              <span role="img" aria-label="aria-label">
                ❌ Deletar Institutição
              </span>
            </Button> */}
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
