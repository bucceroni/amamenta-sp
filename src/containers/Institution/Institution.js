import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
    paddingBottom: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Institution extends Component {
  componentDidMount() {
    const { actions, user } = this.props;
    actions.getUserInstitution(user.user_id);
  }

  render() {
    const { classes, userInstitution } = this.props;
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Instituição
        </Typography>

        <Grid container spacing={24}>
          <Grid item xs={12}>
            {userInstitution.status === undefined && (
              <Paper className={classes.root} elevation={1}>
                <Typography variant="subheading" gutterBottom>
                  No momento você não faz parte de nenhuma instituição.
                </Typography>
                <Typography variant="subheading" gutterBottom>
                  <Link to="/localize">
                    Cadastre e encontre aqui a sua instituição
                  </Link>
                </Typography>
              </Paper>
            )}

            {userInstitution.status === "PENDING" && (
              <Paper className={classes.root} elevation={1}>
                <Typography variant="subheading" gutterBottom>
                  Aguarde... solicitação pendente de aprovação.
                </Typography>
              </Paper>
            )}
          </Grid>
          {userInstitution.status === "APPROVED" && (
            <Grid item xs={12}>
              <Button
                color="primary"
                component={Link}
                to={`/institution/details`}
              >
                <span role="img" aria-label="aria-label">
                  🏥 Instituição Cadastrada
                </span>
              </Button>
            </Grid>
          )}

          <Grid item xs={12}>
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

          {userInstitution.status === "APPROVED" && (
            <Grid item xs={12}>
              <Button
                color="primary"
                component={Link}
                to={`/institution/events`}
              >
                <span role="img" aria-label="aria-label">
                  🎫 Cadastrar Eventos
                </span>
              </Button>
            </Grid>
          )}
          {userInstitution.status === "APPROVED" && (
            <Grid item xs={12}>
              <Button
                color="primary"
                component={Link}
                to={`/institution/donation`}
              >
                <span role="img" aria-label="aria-label">
                  🍼 Doações
                </span>
              </Button>
            </Grid>
          )}
          {userInstitution.status === "APPROVED" && (
            <Grid item xs={12}>
              <Button
                color="primary"
                component={Link}
                to={`/institution/users`}
              >
                <span role="img" aria-label="aria-label">
                  👶 Usuários Cadastrados
                </span>
              </Button>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button color="primary" component={Link} to={`/user/edit`}>
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

Institution.propTypes = {
  classes: PropTypes.object.isRequired,
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
)(withStyles(styles)(Institution));
