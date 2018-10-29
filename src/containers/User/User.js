import React, { Component } from "react";
// import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardFeatures from "../../components/CardFeatures/CardFeatures";

const styles = theme => ({});

class User extends Component {
  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Usuário - Doador
        </Typography>
        <Grid container spacing={24}>
          <Grid item>
            <CardFeatures  title={"titulo"} subtitle={"subtitulo"} textButton={"botão"}/>
          </Grid>
          <Grid item>
            <CardFeatures  title={"titulo"} subtitle={"subtitulo"} textButton={"botão"}/>
          </Grid>
          <Grid item>
            <CardFeatures  title={"titulo"} subtitle={"subtitulo"} textButton={"botão"}/>
          </Grid>
          <Grid item>
            <CardFeatures  title={"titulo"} subtitle={"subtitulo"} textButton={"botão"}/>
          </Grid>
          <Grid item>
            <CardFeatures  title={"titulo"} subtitle={"subtitulo"} textButton={"botão"}/>
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
)(withStyles(styles)(User));
