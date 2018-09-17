import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import styles from "./styles";

class Localize extends Component {
  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Localizar Intituições - Cidade/ Estado
        </Typography>
      </div>
    );
  }
}

Localize.propTypes = {};

const mapStateToProps = state => {
  return {
    ...state.localize
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
)(withStyles(styles, { withTheme: true })(Localize));