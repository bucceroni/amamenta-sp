import React, { Component } from "react";
// import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


import styles from "./styles";

class User extends Component {

  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Usuário - Doador
        </Typography>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    ...state.user
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
)(withStyles(styles, { withTheme: true })(User));
