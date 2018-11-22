import React, { Component } from "react";
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
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class UserInstitutionDetails extends Component {
  componentDidMount() {
    const { actions, user } = this.props;
    actions.getUserInstitution(user.user_id);
  }

  handleUnselectInstitution = () => {
    const { actions, user, userInstitution } = this.props;
    actions.removeUserInstitution(user.user_id, userInstitution.insitution_id);
  };

  render() {
    const { classes, userInstitution } = this.props;

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Instituição Cadastrada
        </Typography>
        <Grid container spacing={24}>
          {userInstitution && userInstitution.status !== "PENDING" ? (
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div>
                  <Typography wrap>{userInstitution.name}</Typography>
                  <Typography>{userInstitution.type}</Typography>
                  <Typography>{userInstitution.id}</Typography>
                  <Typography>Site: {userInstitution.site}</Typography>
                  <Typography>Telefone:{userInstitution.phone}</Typography>
                  <hr />
                  <Typography>Endereço:</Typography>
                  <Typography>
                    Rua {userInstitution.street}, número:{" "}
                    {userInstitution.number}, complemento:{" "}
                    {userInstitution.complement}
                  </Typography>
                  <Typography>
                    Bairro: {userInstitution.district} - CEP:{" "}
                    {userInstitution.postal_code}
                  </Typography>
                  <Typography>
                    Cidade: {userInstitution.city} - Estado:{" "}
                    {userInstitution.state}
                  </Typography>
                </div>
              </Paper>
            </Grid>
          ) : (
            <div>Aguarde... usuário ainda não autorizado pela instituição</div>
          )}

          <Button color="primary" onClick={this.handleUnselectInstitution}>
            <span role="img" aria-label="aria-label">
              ❌ Deletar Institutição
            </span>
          </Button>
        </Grid>
      </div>
    );
  }
}

UserInstitutionDetails.propTypes = {
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
)(withStyles(styles)(UserInstitutionDetails));
