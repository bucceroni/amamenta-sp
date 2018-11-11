import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class User extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getInstitutionUser();
  }

  handleUnselectInstitution = () => {
    const { actions } = this.props;
    actions.deleteInstitutionUser();
  };

  render() {
    const { classes, userInstitution, reportInstitution} = this.props;
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Usuário - Doador
        </Typography>
        <Grid container spacing={24}>
          <Grid item>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="subheading" gutterBottom>
              No momento você não faz parte de nenhuma instituição. 
              </Typography>
              <Typography variant="subheading" gutterBottom>
                <Link to="/localize">Cadastre-se aqui</Link>
              </Typography>
            </Paper>
            <Button
              color="primary"
              component={Link}
              to={`/user/edit`}
            >
              <span role="img" aria-label="aria-label">
                ✏ Editar usuário
              </span>
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
  userInstitution: PropTypes.object,
  reportInstitution: PropTypes.object
};

const mapStateToProps = state => {
  return {
    userInstitution: state.user.userInstitution,
    reportInstitution: state.user.reportInstitution,
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
