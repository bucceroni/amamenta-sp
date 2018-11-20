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

class RegisterEvents extends Component {
  state = {
    description: "",
    site: "",
    title: "",
    date_initial: "",
    date_end: ""
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = () => {
    const { description, site, title, date_initial, date_end } = this.state;
    const { actions } = this.props;
    actions.postAddEvent(description, site, title, date_initial, date_end);
  };

  handleCloseSnackbar = () => {
    const { actions, history, addEvent } = this.props;
    actions.closeSnackbarEvent();

    if (addEvent.title) {
      history.push("/institution");
    }
  };

  render() {
    const { description, site, title, date_initial, date_end } = this.state;
    const { classes, message, openSnackbar } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />

        <main className={classes.layout}>
          <Typography variant="display1" gutterBottom>
            Cadastrar Evento
          </Typography>
          <Paper className={classes.paper}>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Nome do evento"
                className={classes.textField}
                type="string"
                name="title"
                margin="normal"
                variant="outlined"
                value={title}
                onChange={this.handleChange("title")}
              />
              <TextField
                fullWidth
                label="Descrição"
                className={classes.textField}
                type="string"
                name="description"
                margin="normal"
                variant="outlined"
                value={description}
                onChange={this.handleChange("description")}
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
                label="Início"
                className={classes.textField}
                type="string"
                placeholder="dd/mm/aaaa"
                name="date_initial"
                margin="normal"
                value={date_initial}
                onChange={this.handleChange("date_initial")}
              />
              <TextField
                fullWidth
                label="Fim"
                className={classes.textField}
                type="string"
                placeholder="dd/mm/aaaa"
                name="date_end"
                margin="normal"
                value={date_end}
                onChange={this.handleChange("date_end")}
              />

              <Button
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                disabled={
                  description && site && title && date_initial && date_end
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

RegisterEvents.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object,
  addEvent: PropTypes.object,
  message: PropTypes.string,
  openSnackbar: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    addEvent: state.event.addEvent,
    message: state.event.message,
    openSnackbar: state.event.openSnackbar
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
)(withStyles(styles)(RegisterEvents));
