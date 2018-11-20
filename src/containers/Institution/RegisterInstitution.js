import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

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

class RegisterInstitution extends Component {
  state = {
    state_id: "",
    city_id: "",
    email: "",
    name: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    postal_code: "",
    phone: [],
    disabledCity: true,
    site: "",
    type: ""
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getStates();
    actions.getInstitutionsType();
  }

  handleChange = prop => event => {
    const { actions } = this.props;

    if (prop === "state_id") {
      actions.getCities(event.target.value);
      this.setState({
        disabledCity: false
      });
    }
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = () => {
    const {
      city_id,
      email,
      name,
      street,
      number,
      complement,
      district,
      postal_code,
      phone,
      site,
      type
    } = this.state;
    const { actions } = this.props;
    actions.postAddInstitution(
      city_id,
      email,
      name,
      street,
      number,
      complement,
      district,
      postal_code,
      phone,
      site,
      type
    );
  };

  handleCloseSnackbar = () => {
    const { actions, history, addInstitution } = this.props;
    actions.closeSnackbarRegister();

    if (addInstitution.name) {
      history.push("/institution");
    }
  };

  render() {
    const {
      state_id,
      city_id,
      email,
      name,
      street,
      number,
      complement,
      district,
      postal_code,
      phone,
      site,
      type,
      disabledCity
    } = this.state;
    const {
      classes,
      states,
      cities,
      message,
      openSnackbar,
      institution_type
    } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
        <Typography variant="display1" gutterBottom>
          Cadastrar Instituição
        </Typography>
          <Paper className={classes.paper}>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Nome Instituição"
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
                label="Site"
                className={classes.textField}
                type="string"
                name="site"
                margin="normal"
                variant="outlined"
                value={site}
                onChange={this.handleChange("site")}
              />
              <TextField
                fullWidth
                select
                label="Tipo de Instituição"
                className={classes.textField}
                value={type}
                onChange={this.handleChange("type")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {institution_type &&
                  institution_type.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.id}>
                        {item.description}
                      </MenuItem>
                    );
                  })}
              </TextField>
              <TextField
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
              </TextField>
              <TextField
                fullWidth
                select
                label="Cidade"
                className={classes.textField}
                disabled={disabledCity}
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
              </TextField>
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

              <Button
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                disabled={
                  email &&
                  site &&
                  name &&
                  type &&
                  city_id &&
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

RegisterInstitution.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object,
  states: PropTypes.array,
  cities: PropTypes.array,
  addInstitution: PropTypes.object,
  message: PropTypes.string,
  openSnackbar: PropTypes.bool,
  registerInstitution: PropTypes.bool,
  institution_type: PropTypes.array
};

const mapStateToProps = state => {
  return {
    states: state.register.states,
    cities: state.register.cities,
    roles: state.home.roles,
    addInstitution: state.register.addInstitution,
    message: state.register.message,
    openSnackbar: state.register.openSnackbar,
    registerInstitution: state.register.registerInstitution,
    institution_type: state.home.institution_type
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
)(withStyles(styles)(RegisterInstitution));
