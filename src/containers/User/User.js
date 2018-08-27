import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styles from "./styles";

class User extends Component {
  state = {
    name: "",
    nickname: ""
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getUsers();
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleAddUser = () => {
    const { actions } = this.props;
    const { name, nickname } = this.state;
    actions.addUser(name, nickname);
    this.setState({
      name: "",
      nickname: ""
    });
  };

  render() {
    const { classes, users } = this.props;
    const { name, nickname } = this.state;
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          POC - User
        </Typography>

        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="headline" component="h3">
              Adicionar usuário:
            </Typography>
            <Paper className={classes.root} elevation={1}>
              <TextField
                id="name"
                label="Nome"
                className={classes.textField}
                value={name}
                onChange={this.handleChange("name")}
                margin="normal"
              />
              <TextField
                id="nickname"
                label="Apelido"
                className={classes.textField}
                value={nickname}
                onChange={this.handleChange("nickname")}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.handleAddUser}
              >
                Salvar
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="headline" component="h3">
              Listar usuários:
            </Typography>
            <Grid container spacing={24}>
              {users.map(item => {
                return (
                  <Grid item xs={12} key={item.id}>
                    <Paper className={classes.root} elevation={1}>
                      <Typography variant="headline" component="h3">
                        ID: {item.id}
                      </Typography>
                      <Typography component="p">
                        Apelido: {item.nickname}
                      </Typography>
                      <Typography component="p">Nome: {item.name}</Typography>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

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
