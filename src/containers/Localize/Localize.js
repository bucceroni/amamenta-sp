import React, { Component } from "react";
import PropTypes from "prop-types";

// import AutoComplete from "../../components/AutoComplete/AutoComplete"

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import classNames from 'classnames';

const styles = {
  card: {
    backgroundColor: "#3F51B5"
  },
  text: {
    color: "#ffffff"
  }
};

class Localize extends Component {
//  state= {
//    search: null
// }

  componentDidMount() {
    const { actions } = this.props;
    actions.getInstitutions();
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


  render() {
    // const { classes, className, institutions } = this.props;
    const { classes, institutions } = this.props;

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Localizar Instituições
        </Typography>
        <Grid item xs={12}>
        {/* <AutoComplete data={institutions}/> */}
        </Grid>
        <Grid container spacing={24}>
          {institutions.map((value, index) => {
            return (
              <Grid item key={index}>
                <Card>
                  <CardHeader
                    title={value.name}
                    subheader={value.type}
                    key={value.id}
                  />
                  <CardContent className={classes.card}>
                    <Typography className={classes.text}>
                      Site: {value.site}
                    </Typography>
                    <Typography className={classes.text}>
                      Telefone: {value.phone[0]}
                    </Typography>
                    <hr />
                    <Typography className={classes.text}>Endereço:</Typography>
                    <Typography className={classes.text}>
                      Rua {value.street}, número: {value.number}, complemento:{" "}
                      {value.complement}
                    </Typography>
                    <Typography className={classes.text}>
                      Bairro: {value.district} - CEP: {value.postal_code}
                    </Typography>
                    <Typography className={classes.text}>
                      Cidade: {value.city} - Estado: N/A
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

Localize.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object,
  home: PropTypes.object
};

const mapStateToProps = state => {
  return {
    institutions: state.home.institutions
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
)(withStyles(styles)(Localize));
