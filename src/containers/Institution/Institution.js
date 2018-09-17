import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

class Institution extends Component {
  state = {};

  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Instituição
        </Typography>
      </div>
    );
  }
}

Institution.propTypes = {};

const mapStateToProps = state => {
  return {
    ...state.institution
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
)(withStyles(styles, { withTheme: true })(Institution));
