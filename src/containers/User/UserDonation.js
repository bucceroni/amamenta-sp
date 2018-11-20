import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// import ModalDetailsUsers from "../../components/ModalDetailsUsers";

const styles = theme => ({});

class UserDonation extends Component {
  // state = {
  //   openModal: false,
  //   dataModal: {}
  // };

  componentDidMount() {
    const { actions, user } = this.props;
    actions.getDonationUser(user.user_id);
  }

  // handleCloseModal = () => {
  //   this.setState({ openModal: false });
  // };

  // handleApproveInstitutionUser = (user_id) => {
  //   const { actions, history } = this.props;
  //   actions.approveInstitutionUser(user_id);
  //   history.push("/institution");
  // };

  // handleRemoveInstitutionUser = () => {
  //   const { actions, history } = this.props;
  //   actions.removeInstitutionUser();
  //   history.push("/institution");
  // };

  render() {
    // const { openModal, dataModal } = this.state;
    const { donationUser } = this.props;

    const options = {
      onRowClick: (rowData, rowState) => {
        this.setState({
          dataModal: donationUser[rowState.dataIndex],
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
      downloadOptions: { filename: "Doações.csv", separator: "," },
      filter: true,
      viewColumns: true,
      selectableRows: false
    };

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Usuários cadastrados
        </Typography>

        {donationUser.length > 0 && (
          <Grid item xs={12}>
            <MUIDataTable
              title={
                <Typography variant="subheading" gutterBottom>
                  Selecione uma doação e veja mais informações
                </Typography>
              }
              data={donationUser.map(item => {
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
        {/* <ModalDetailsUsers
          openModal={openModal}
          dataModal={dataModal}
          onClose={this.handleCloseModal}
          onApprove={this.handleApproveInstitutionUser}
          onRemove={this.handleRemovenstitutionUser}
        /> */}
      </div>
    );
  }
}


UserDonation.propTypes = {
  user: PropTypes.object,
  donationUser: PropTypes.array
};

const mapStateToProps = state => {
  return {
    user: state.login.user,
    donationUser: state.donationUser.donationUser
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

