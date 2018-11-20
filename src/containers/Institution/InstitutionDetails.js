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
import Snackbar from "@material-ui/core/Snackbar";

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

class InstitutionDetails extends Component {
  componentDidMount() {
    const { actions, user } = this.props;
    actions.getUserInstitution(user.user_id);
  }

  handleRemoveUserInstitution = () => {
    const { user, actions } = this.props;
    actions.removeUserInstitution(user.user_id);
  };

  handleCloseSnackbar = () => {
    const { actions, history } = this.props;
    actions.closeSnackbarUserInstitution();
    history.push("/institution");
  };

  render() {
    const { classes, userInstitution, openSnackbar, message } = this.props;

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Instituição Cadastrada
        </Typography>
        <Grid container spacing={24}>
          {userInstitution && userInstitution.status !== "PENDING" && (
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
          )}
          <Button color="primary" onClick={this.handleRemoveUserInstitution}>
            <span role="img" aria-label="aria-label">
              ❌ Remover Institutição
            </span>
          </Button>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={this.handleCloseSnackbar}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{message}</span>}
        />
      </div>
    );
  }
}

InstitutionDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  userInstitution: PropTypes.any,
  openSnackbar: PropTypes.bool,
  message: PropTypes.string
};

const mapStateToProps = state => {
  return {
    user: state.login.user,
    userInstitution: state.user.userInstitution,
    message: state.institution.message,
    openSnackbar: state.institution.openSnackbar
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
)(withStyles(styles)(InstitutionDetails));
