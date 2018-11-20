import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({});

class Administrator extends Component {
  componentDidMount() {
    // const { actions, user } = this.props;
    // actions.getUserInstitution(user.user_id);
  }

//   handleUnselectInstitution = () => {
//     const { actions } = this.props;
//     actions.deleteUserInstitution();
//   };

  render() {
    // const { userInstitution } = this.props;

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Administrador
        </Typography>
        <Grid container spacing={24}>
          {/* {userInstitution && (
            <Grid item xs={12}>
              <div>{JSON.stringify(userInstitution)}</div>
            </Grid>
          )}
          <Button color="primary" onClick={this.handleUnselectInstitution}>
            <span role="img" aria-label="aria-label">
              ❌ Deletar Institutição
            </span>
          </Button> */}
        </Grid>
      </div>
    );
  }
}

Administrator.propTypes = {
  user: PropTypes.object,
  userInstitution: PropTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.login.user,
    userInstitution: state.user.userInstitution
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
)(withStyles(styles)(Administrator));
