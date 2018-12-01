import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Snackbar, TextField, Button } from "@material-ui/core";

// import ModalDetailsUsers from "../../components/ModalDetailsUsers";

const styles = theme => ({});

class UserDonation extends Component {
  state = {
    // openModal: false,
    // dataModal: {},
    amount_entry: ""
  };

  componentDidMount() {
    const { actions, user } = this.props;
    actions.getUnit();
    actions.getDonationType();
    actions.getDonationUser(user.user_id);
  }

  handleCloseSnackbar = () => {
    const { actions } = this.props;
    actions.closeSnackbarDonationUser();
    this.setState({ amount_entry: "" });
  };

  handleChangeAmountEntry = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleAddDonationUser = () => {
    const { actions, user } = this.props;
    const { amount_entry } = this.state;
    actions.addDonationUser(user.user_id, amount_entry);
  };

  // handleCloseModal = () => {
  //   this.setState({ openModal: false });
  // };

  render() {
    // const { openModal, dataModal } = this.state;
    const { amount_entry } = this.state;
    const { donationUser, openSnackbar, message } = this.props;

    const options = {
      // onRowClick: (rowData, rowState) => {
      //   this.setState({
      //     dataModal: donationUser[rowState.dataIndex],
      //     openModal: true
      //   });
      // },
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
      rowsPerPage: 100,
      resizableColumns: false,
      rowHover: true,
      sortFilterList: true,
      serverSide: false,
      sort: true,
      search: true,
      print: true,
      download: true,
      downloadOptions: { filename: "Doações.csv", separator: "," },
      filter: true,
      viewColumns: true,
      selectableRows: false
    };

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Doações
        </Typography>

        <TextField
          fullWidth
          id="amount_entry"
          label="Quantidade de Leite"
          type="amount_entry"
          margin="normal"
          variant="outlined"
          value={amount_entry}
          onChange={this.handleChangeAmountEntry("amount_entry")}
        />

        <Button
        fullWidth
          styles={{ paddingBottom: "10px" }}
          variant="contained"
          size="large"
          color="primary"
          disabled={amount_entry === ""}
          onClick={this.handleAddDonationUser}
        >
          Registrar retirada de Leite em ml
        </Button>

        <hr />

        {donationUser && donationUser.length > 0 && (
          <Grid item xs={12}>
            <MUIDataTable
              title={
                <Typography variant="subheading" gutterBottom>
                  Selecione uma doação e veja mais informações
                </Typography>
              }
              data={donationUser.map(item => {
                return [
                  item.amount_entry + item.unit_id_description,
                  item.date_entry,
                  item.status === "PENDING" ? "Pendente" : "Aprovado"
                ];
              })}
              columns={["Quantidade", "Data de entrada", "Status"]}
              options={options}
            />
          </Grid>
        )}
        {/* <ModalDetailsUsers
          openModal={openModal}
          dataModal={dataModal}
          onClose={this.handleCloseModal}
          onApprove={this.handleApproveInstitutionUser}
          onRemove={this.handleRemovenstitutionUser}
        /> */}
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

UserDonation.propTypes = {
  user: PropTypes.object,
  unit: PropTypes.array,
  donationType: PropTypes.array,
  donationUser: PropTypes.array,
  message: PropTypes.string,
  openSnackbar: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    user: state.login.user,
    unit: state.donationUser.unit,
    donationType: state.donationUser.donationType,
    donationUser: state.donationUser.donationUser,
    message: state.donationUser.message,
    openSnackbar: state.donationUser.openSnackbar
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
)(withStyles(styles)(UserDonation));
