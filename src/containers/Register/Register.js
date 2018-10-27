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
// import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

class Register extends Component {
  state = {
    state_id:"",
    city_id: "",
    email: "",
    password: "",
    name: "",
    nickname: "",
    gender: "",
    street: "",
    number: "",
    role_id: "",
    complement: "",
    district: "",
    postal_code: "",
    phone: [],
    birth_date: ""
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getStates();
  }

  handleSubmit = () => {
    const {
      name,
      nickname,
      birth_date,
      gender,
      city_id,
      street,
      number,
      complement,
      district,
      postal_code,
      phone,
      role_id,
      email,
      password
    } = this.state;
    const { actions} = this.props;
    actions.addUser(
      name,
      nickname,
      birth_date,
      gender,
      city_id,
      street,
      number,
      complement,
      district,
      postal_code,
      phone,
      role_id,
      email,
      password
    );
  };

  handleChange = prop => event => {
    if(prop === "state_id"){
      const {actions} = this.props
      actions.getCities(event.target.value)
    }
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const {
      name,
      nickname,
      birth_date,
      gender,
      city_id,
      state_id,
      street,
      number,
      complement,
      district,
      postal_code,
      phone,
      role_id,
      email,
      password
    } = this.state;
    const {
      classes,
      states,
      cities
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
            <Typography variant="headline">Cadastre-se</Typography>

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
                name="birth_date"
                margin="normal"
                variant="outlined"
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
              <Select
                value={state_id}
                onChange={this.handleChange("state_id")}
                inputProps={{
                  name: "state_id"
                }}
              >
                {states.map((item, index) => {
                  return(
                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                  )
                })}  
              </Select>
              <Select
              disabled={false}
                value={city_id}
                onChange={this.handleChange("city_id")}
                inputProps={{
                  name: "city_id"
                }}
              >
                {cities.map((item, index) => {
                  return(
                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                  )
                })}  
              </Select>
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
                type="number"
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
              <TextField
                fullWidth
                label="Telefone"
                className={classes.textField}
                type="string"
                name="phone"
                margin="normal"
                variant="outlined"
                value={phone}
                onChange={this.handleChange("phone")}
              />
              {/* TODO: USER LOCALSTORAGE */}
              <TextField
                fullWidth
                label="Usuário"
                className={classes.textField}
                type="number"
                name="role_id"
                margin="normal"
                variant="outlined"
                value={role_id}
                onChange={this.handleChange("role_id")}
              />
              <TextField
                fullWidth
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={this.handleChange("email")}
              />
              <TextField
                fullWidth
                label="Senha"
                className={classes.textField}
                type="password"
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
                disabled={
                  email &&
                  password &&
                  name &&
                  city_id &&
                  street &&
                  number &&
                  district &&
                  postal_code
                    ? false
                    : true
                }
                onClick={this.handleSave}
              >
                Salvar
              </Button>
            </form>
          </Paper>
        </main>
        {/* <Snackbar
     anchorOrigin={{ vertical, horizontal }}
     open={openSnackbar}
     autoHideDuration={2000}
     onClose={this.handleCloseSnackbar}
     ContentProps={{
       "aria-describedby": "message-id"
      }}
      message=
      /> */}
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object,
  states: PropTypes.array,
  cities: PropTypes.array,
  addUser: PropTypes.object,
  message: PropTypes.string,
  openSnackbar: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    states: state.home.states,
    cities: state.home.cities,
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
)(withStyles(styles)(Register));
