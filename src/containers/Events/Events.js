import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  card: {
    backgroundColor: "#3F51B5"
  },
  text: {
    color: "#ffffff"
  }
};
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
        {typeof events !== "string" && (
          <Grid container spacing={24}>
            {events.map((value, index) => {
              return (
                <Grid item xs={12} key={index}>
                  <Card>
                    <CardHeader
                      title={value.title}
                      subheader={value.description}
                      key={value.id}
                    />
                    <CardContent style={styles.card}>
                      <Typography style={styles.text}>
                        Link: {value.name}
                      </Typography>
                      <Typography style={styles.text}>
                        Início: {value.date_initial}
                      </Typography>
                      <Typography style={styles.text}>
                        Fim: {value.date_end}
                      </Typography>
                      <Typography style={styles.text}>
                        Instituição: {value.name}
                      </Typography>
                      <Typography style={styles.text}>{value.type}</Typography>
                      <Typography style={styles.text}>
                        Site: {value.site}
                      </Typography>
                      <Typography style={styles.text}>
                        Email: {value.email}
                      </Typography>
                      <Typography style={styles.text} />
                      <hr />
                      <Typography style={styles.text}>Endereço:</Typography>
                      <Typography style={styles.text}>
                        Rua {value.street}, número: {value.number}, complemento:{" "}
                        {value.complement}
                      </Typography>
                      <Typography style={styles.text}>
                        Bairro: {value.district} - CEP: {value.postal_code}
                      </Typography>
                      <Typography style={styles.text}>
                        Cidade: {value.city} - Estado: N/A
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
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
