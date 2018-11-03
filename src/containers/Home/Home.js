import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    maxWidth: 400,
    backgroundColor: "#fff4da"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  buttons: {
    marginTop: 75,
    marginBottom: 75
  }
});
class Home extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getInstitutions();
    actions.getRoles();
    // actions.getEvents();
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div>
            <div>
              <Typography
                variant="title"
                align="center"
                color="textPrimary"
                paragraph
              >
                Projeto desenvolvido para facilitar a comunicação entre a
                doadora e o banco de leite materno.
              </Typography>
              <Typography
                variant="title"
                align="center"
                color="textPrimary"
                paragraph
              >
                Cadastre-se, escolha uma instituição, retire e armazene o leite,
                a instituição escolhida entra em contato assim que tiver a
                quantidade ideal para a retirada.
              </Typography>

              <Grid
                container
                spacing={16}
                className={classes.buttons}
                justify="center"
              >
                <Grid item>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/register"
                    color="primary"
                  >
                    Cadastre-se
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/login"
                    color="primary"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>

              <Typography
                variant="title"
                align="center"
                color="textPrimary"
                paragraph
              >
                Cadastrar sua instituição também é muito fácil.
              </Typography>
              <Typography
                variant="title"
                align="center"
                color="textPrimary"
                paragraph
              >
                Cadastre o usuário e selecione a opção instituição, depois
                insira os dados da sua instituição e aguarde a aprovação,
                entraremos em contato.
              </Typography>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object
};

const mapStateToProps = state => {
  return {
    ...state.home
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
)(withStyles(styles)(Home));
