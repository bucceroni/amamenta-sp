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
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { actions } = this.props;
    actions.login(email, password);
  
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    const { history, login } = this.props;
    if (login) {
      history.push("/user");
    }

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
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object,
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.login.user,
    login: state.login.login
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
