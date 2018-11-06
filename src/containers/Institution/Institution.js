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

class Institution extends Component {
  state = {};

  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Instituição
        </Typography>

        <Grid container spacing={24}>
          <Grid item>
            <Button
              color="primary"
              component={Link}
              to={`/institution/register`}
            >
              <span role="img" aria-label="aria-label">
                🏢 Cadastrar Instituição
              </span>
            </Button>
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
)(withStyles(styles)(Institution));
