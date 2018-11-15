import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import MUIDataTable from "mui-datatables";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ModalDetailsInstitutions from "../../components/ModalDetailsInstitution";

// import Button from "@material-ui/core/Button";
// import IconCheck from "@material-ui/icons/Check";
// import IconClose from "@material-ui/icons/Close";

class Localize extends Component {
  state = {
    openModal: false,
    dataModal: {}
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getInstitutions();
  }

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  // handleSelectInstitution = async () => {
  //   const { actions, history } = this.props;
  //   await actions.postInstitutionUser();
  //   history.push("/user");
  // };

  render() {
    const { openModal, dataModal } = this.state;
    const { institutions } = this.props;

    const options = {
      onRowClick: (rowData, rowState) => {
        this.setState({
          dataModal: institutions[rowState.dataIndex],
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
      downloadOptions: { filename: "Instituições.csv", separator: "," },
      filter: true,
      viewColumns: true,
      selectableRows: false
    };

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Localizar Instituições
        </Typography>
        <Grid item xs={12}>
          <MUIDataTable
            title={
              <Typography variant="subheading" gutterBottom>
                Selecione uma instituição e veja mais informações
              </Typography>
            }
            data={institutions.map(item => {
              return [
                item.name,
                item.type,
                item.state,
                item.city,
                item.district
              ];
            })}
            columns={["Nome", "Tipo", "Estado", "Cidade", "Bairro"]}
            options={options}
          />
        </Grid>
        <ModalDetailsInstitutions
          openModal={openModal}
          dataModal={dataModal}
          onClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

Localize.propTypes = {
  actions: PropTypes.object,
  institutions: PropTypes.array,
  user: PropTypes.object,
  reportInstitution: PropTypes.object
};

const mapStateToProps = state => {
  return {
    institutions: state.home.institutions,
    user: state.login.user,
    reportInstitution: state.user.reportInstitution
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
)(Localize);

// withStyles(styles, { withTheme: true }(connect(mapStateToProps,mapDispatchToProps)(App))

/* {user && user.role === "user" && (
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={this.handleSelectInstitution}
            >
              <IconCheck />
              Cadastre-se
            </Button>
          </CardActions>
        )} */
