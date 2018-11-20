import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";

import ModalDetailsAdministrator from "../../components/ModalDetailsAdministrator";

const styles = theme => ({});

class Administrator extends Component {
  state = {
    openModal: false,
    dataModal: {}
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getAdministratorUsers();
  }

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  handleApproveAdministratorUsers = (user_id, institution_id) => {
    const { actions } = this.props;
    actions.approveAdministratorUsers(user_id, institution_id);
    this.handleCloseModal()
  };

  handleRemoveAdministratorUsers = (user_id, institution_id) => {
    const { actions } = this.props;
    actions.removeAdministratorUsers(user_id, institution_id);
    this.handleCloseModal()
  };

  handleCloseSnackbar = () => {
    const { actions, history } = this.props;
    actions.closeSnackbarAdministratorUsers();
    history.push("/administrator");
  };

  render() {
    const { openModal, dataModal } = this.state;
    const { administratorUsers, openSnackbar, message } = this.props;

    const options = {
      onRowClick: (rowData, rowState) => {
        this.setState({
          dataModal: administratorUsers[rowState.dataIndex],
          openModal: true
        });
      },
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
      downloadOptions: { filename: "Usuários_Instituições.csv", separator: "," },
      filter: true,
      viewColumns: true,
      selectableRows: false
    };

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Administrador
        </Typography>

        {administratorUsers.length > 0 && (
          <Grid item xs={12}>
            <MUIDataTable
              title={
                <Typography variant="subheading" gutterBottom>
                  Selecione um usuário e veja mais informações
                </Typography>
              }
              data={administratorUsers.map(item => {
                return [
                  item.name,
                  item.email,
                  item.city,
                  item.district,
                  item.status === "PENDING" ? "Pendente" : "Aprovado"
                ];
              })}
              columns={["Nome", "Email", "Cidade", "Bairro", "Status"]}
              options={options}
            />
          </Grid>
        )}
        <ModalDetailsAdministrator
          openModal={openModal}
          dataModal={dataModal}
          onClose={this.handleCloseModal}
          onApprove={this.handleApproveAdministratorUsers}
          onRemove={this.handleRemoveAdministratorUsers}
        />

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

Administrator.propTypes = {
  user: PropTypes.object,
  administratorUsers: PropTypes.any,
  message: PropTypes.string,
  openSnackbar: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    user: state.login.user,
    administratorUsers: state.admin.administratorUsers,
    message: state.admin.message,
    openSnackbar: state.admin.openSnackbar
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
)(withStyles(styles)(Administrator));
