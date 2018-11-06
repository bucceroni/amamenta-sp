import React, { Component } from "react";
// import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({});

class User extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getInstitutionUser(54);
  }
  render() {
    const {institution} = this.props
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Usuário - Doador
        </Typography>
        <Grid container spacing={24}>
          <Grid item>
            <Typography variant="display1" gutterBottom>
              Você não esta cadastrado em nenhuma instituição"
              {JSON.stringify(institution)}
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    institution: state.user.institution
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
