import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({});

class RegisterEvents extends Component {
  state = {};

  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Cadastrar Evento
        </Typography>

        <Grid container spacing={24}>
          <Grid item>
            primeira campannha Doacao de leute materno Link: banco de leite -
            ipirangaede Início: 10/10/2018 Fim: 10/12/2018 Instituição: banco de
            leite - ipirangaede Posto de coleta de leite materno Site:
            wwww.ipiranga.com.br Email: contcccato@ipiranga.com.br Endereço: Rua
            street1, número: 1, complemento: 2 Bairro: e - CEP: 12345-4456
            Cidade: Alta Floresta D'Oeste - Estado: N/A
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.login
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
)(withStyles(styles)(RegisterEvents));
