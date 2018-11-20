import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
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
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class UserEdit extends Component {
  state = {
    user_id: this.props.user.user_id,
    // state_id: this.props.user.state,
    // city_id: this.props.user.city_id,
    // email: this.props.user.email,
    // password: this.props.user.password,
    name: this.props.user.name,
    nickname: this.props.user.nickname,
    gender: this.props.user.gender,
    street: this.props.user.street,
    number: this.props.user.number,
    role_id: this.props.user.role_id,
    complement: this.props.user.complement,
    district: this.props.user.district,
    postal_code: this.props.user.postal_code,
    // phone: this.props.user.phone,
    birth_date: this.props.user.bith_date
    // disabledCity: true
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getStates();
    actions.getRoles();
  }

  handleChange = prop => event => {
    // const { actions } = this.props;

    // if (prop === "state_id") {
    //   actions.getCities(event.target.value);
    //   this.setState({
    //     disabledCity: false
    //   });
    // }
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = () => {
    const {
      user_id,
      name,
      nickname,
      birth_date,
      gender,
      // city_id,
      street,
      number,
      complement,
      district,
      postal_code,
      // phone,
      role_id
      // email
      // password
    } = this.state;
    const { actions } = this.props;
    actions.putEditUser(
      user_id,
      name,
      nickname,
      birth_date,
      gender,
      // city_id,
      street,
      number,
      complement,
      district,
      postal_code,
      // phone,
      role_id
      // email
      // password
    );
  };

  handleCloseSnackbar = async () => {
    const { user, actions, history } = this.props;
    await actions.closeSnackbarRegister();
    if (user.role === "user") {
      history.push("/user");
    } else {
      history.push("/institution");
    }
  };

  render() {
    const {
      name,
      nickname,
      birth_date,
      gender,
      // city_id,
      // state_id,
      street,
      number,
      complement,
      district,
      postal_code,
      // phone,
      role_id
      // email,
      // password,
      // disabledCity
    } = this.state;
    const {
      classes,
      // states,
      // cities,
      roles,
      message,
      openSnackbar
    } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <span role="img" aria-label="aria-label">
                👶
              </span>
            </Avatar>
            <Typography variant="headline">Editar</Typography>

            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Nome Completo"
                className={classes.textField}
                type="string"
                name="name"
                margin="normal"
                variant="outlined"
                value={name}
                onChange={this.handleChange("name")}
              />
              <TextField
                fullWidth
                label="Apelido"
                className={classes.textField}
                type="string"
                name="nickname"
                margin="normal"
                variant="outlined"
                value={nickname}
                onChange={this.handleChange("nickname")}
              />
              <TextField
                fullWidth
                label="Data de Nascimento"
                className={classes.textField}
                type="string"
                placeholder="dd/mm/aaaa"
                name="birth_date"
                margin="normal"
                value={birth_date}
                onChange={this.handleChange("birth_date")}
              />
              <TextField
                fullWidth
                label="Gênero"
                className={classes.textField}
                type="string"
                name="gender"
                margin="normal"
                variant="outlined"
                value={gender}
                onChange={this.handleChange("gender")}
              />
              {/* <TextField
                fullWidth
                select
                label="Estado"
                className={classes.textField}
                value={state_id}
                onChange={this.handleChange("state_id")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {states &&
                  states.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
              </TextField> */}
              {/* <TextField
                fullWidth
                select
                label="Cidade"
                className={classes.textField}
                // disabled={disabledCity}
                value={city_id}
                onChange={this.handleChange("city_id")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {cities &&
                  cities.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
              </TextField> */}
              <TextField
                fullWidth
                label="Rua"
                className={classes.textField}
                type="string"
                name="street"
                margin="normal"
                variant="outlined"
                value={street}
                onChange={this.handleChange("street")}
              />
              <TextField
                fullWidth
                label="Número"
                className={classes.textField}
                // type="any"
                name="number"
                margin="normal"
                variant="outlined"
                value={number}
                onChange={this.handleChange("number")}
              />
              <TextField
                fullWidth
                label="Complemento"
                className={classes.textField}
                type="string"
                name="complement"
                margin="normal"
                variant="outlined"
                value={complement}
                onChange={this.handleChange("complement")}
              />
              <TextField
                fullWidth
                label="Bairro"
                className={classes.textField}
                type="string"
                name="district"
                margin="normal"
                variant="outlined"
                value={district}
                onChange={this.handleChange("district")}
              />
              <TextField
                fullWidth
                label="CEP"
                className={classes.textField}
                type="string"
                name="postal_code"
                margin="normal"
                variant="outlined"
                value={postal_code}
                onChange={this.handleChange("postal_code")}
              />
              {/* <TextField
                fullWidth
                label="Telefone"
                className={classes.textField}
                type="string"
                name="phone"
                margin="normal"
                variant="outlined"
                value={phone}
                onChange={this.handleChange("phone")}
              /> */}
              <TextField
                fullWidth
                select
                label="Tipo de usuário"
                className={classes.textField}
                value={role_id}
                onChange={this.handleChange("role_id")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {roles &&
                  roles.map((item, index) => {
                    if (item.description === "admin") {
                      return null;
                    } else {
                      return (
                        <MenuItem key={index} value={item.id}>
                          {item.description === "user" ? "Doador" : null}
                          {item.description === "institution"
                            ? "Instituição"
                            : null}
                        </MenuItem>
                      );
                    }
                  })}
              </TextField>
              {/* <TextField
                fullWidth
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={this.handleChange("email")}
              /> */}
              {/* <TextField
                fullWidth
                label="Senha"
                className={classes.textField}
                type="password"
                margin="normal"
                variant="outlined"
                value={password}
                onChange={this.handleChange("password")}
              /> */}

              <Button
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                disabled={
                  // email &&
                  // password &&
                  name &&
                  // city_id &&
                  street &&
                  number &&
                  district &&
                  postal_code
                    ? false
                    : true
                }
                onClick={this.handleSubmit}
              >
                Salvar
              </Button>
            </form>
          </Paper>
        </main>
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
      </React.Fragment>
    );
  }
}

UserEdit.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object,
  // states: PropTypes.array,
  // cities: PropTypes.array,
  roles: PropTypes.array,
  message: PropTypes.string,
  openSnackbar: PropTypes.bool
  // editUser: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    // states: state.register.states,
    // cities: state.register.cities,
    roles: state.home.roles,
    message: state.register.message,
    openSnackbar: state.register.openSnackbar,
    user: state.login.user
    // editUser: state.register.editUser
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
)(withStyles(styles)(UserEdit));
