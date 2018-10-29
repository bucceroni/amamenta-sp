import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    backgroundColor: "#3F51B5"
  },
  text: {
    color: "#ffffff"
  }
};

class Events extends Component {
  componentDidMount() {}

  render() {
    const { events } = this.props;

    const eventsMock = [1, 2, 3, 4, 5];
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Eventos
        </Typography>
        <Grid item xs={12} />
        <Grid container spacing={24}>
          {eventsMock.map((value, index) => {
            return (
              <Grid item key={index}>
                <Card>
                  {/* <CardHeader
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
                  </CardContent> */}
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

Events.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object,
  // events: PropTypes.array
};

const mapStateToProps = state => {
  return {
    // events: state.home.events
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
)(withStyles(styles)(Events));
