import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockIcon from "@material-ui/icons/LockOutline";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Login extends Component {
  state = {
    email: "",
    password: "",
    vertical: "bottom",
    horizontal: "center",
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { actions } = this.props;
    actions.login(email, password);
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleCloseSnackbar = () => {
    const { actions } = this.props;
    const { history, login } = this.props;
    actions.closeSnackbar();

    if(login) {
      history.push("/user");
    }
  };

  render() {
    const { classes, message, openSnackbar } = this.props;
    const { email, password, vertical, horizontal } = this.state;

    
    return (
      <React.Fragment>
        <CssBaseline />

        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Login</Typography>

            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                fullWidth
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={this.handleChange("email")}
              />
              <TextField
                fullWidth
                id="outlined-password-input"
                label="Senha"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                value={password}
                onChange={this.handleChange("password")}
              />

              <Button
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                disabled={email && password ? false : true}
                onClick={this.handleSubmit}
              >
                Entrar
              </Button>

              <Button color="primary" fullWidth component={Link} to="/register">
                Cadastre-se
              </Button>
            </form>
          </Paper>
        </main>
       <Snackbar
       anchorOrigin={{ vertical, horizontal }}
       open={openSnackbar}
       autoHideDuration={2000}
       onClose={this.handleCloseSnackbar}
       ContentProps={{
         "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{message}</span>}
        />
        </React.Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object,
  user: PropTypes.object,
  login: PropTypes.bool,
  message: PropTypes.string,
  openSnackbar: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    user: state.login.user,
    login: state.login.login,
    message: state.login.message,
    openSnackbar: state.login.openSnackbar
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
)(withStyles(styles)(Login));
