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

import ModalDetailsUsers from "../../components/ModalDetailsUsers";

const styles = theme => ({});

class InstitutionUsers extends Component {
  state = {
    openModal: false,
    dataModal: {}
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getInstitutionUsers();
  }

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  handleApproveInstitutionUser = user_id => {
    const { actions } = this.props;
    actions.approveInstitutionUser(user_id);
    this.handleCloseModal()
  };

  handleRemoveInstitutionUser = user_id => {
    const { actions } = this.props;
    actions.removeInstitutionUser(user_id);
    this.handleCloseModal()
  };

  handleCloseSnackbar = () => {
    const { actions, history } = this.props;
    actions.closeSnackbarInstitutionUser();
    history.push("/institution");
  };

  render() {
    const { openModal, dataModal } = this.state;
    const { institutionUsers, openSnackbar, message } = this.props;

    const options = {
      onRowClick: (rowData, rowState) => {
        this.setState({
          dataModal: institutionUsers[rowState.dataIndex],
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
      downloadOptions: { filename: "Usuários.csv", separator: "," },
      filter: true,
      viewColumns: true,
      selectableRows: false
    };

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Usuários cadastrados
        </Typography>

        {institutionUsers.length > 0 && (
          <Grid item xs={12}>
            <MUIDataTable
              title={
                <Typography variant="subheading" gutterBottom>
                  Selecione um usuário e veja mais informações
                </Typography>
              }
              data={institutionUsers.map(item => {
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
        <ModalDetailsUsers
          openModal={openModal}
          dataModal={dataModal}
          onClose={this.handleCloseModal}
          onApprove={this.handleApproveInstitutionUser}
          onRemove={this.handleRemoveInstitutionUser}
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

InstitutionUsers.propTypes = {
  user: PropTypes.object,
  userInstitution: PropTypes.any,
  institutionUsers: PropTypes.any,
  message: PropTypes.string,
  openSnackbar: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    user: state.login.user,
    userInstitution: state.user.userInstitution,
    institutionUsers: state.institution.institutionUsers,
    message: state.institution.message,
    openSnackbar: state.institution.openSnackbar
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
)(withStyles(styles)(InstitutionUsers));
