import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import CardEvents from "../../components/CardEvents/CardEvents";

class Events extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getEvents();
  }

  render() {
    const { events } = this.props;

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Eventos
        </Typography>
        <Grid container spacing={24}>
          {events.map((value, index) => {
            return (
              <Grid item xs={12} key={index}>
                <CardEvents value={value} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

Events.propTypes = {
  actions: PropTypes.object,
  events: PropTypes.array
};

const mapStateToProps = state => {
  return {
    events: state.home.events
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
)(Events);
