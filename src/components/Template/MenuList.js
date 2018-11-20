import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import BusinessIcon from "@material-ui/icons/Business";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InfoIcon from "@material-ui/icons/Info";
import EventNoteIcon from "@material-ui/icons/EventNote";

import styles from "./styles";

class MenuList extends React.Component {
  render() {
    const { classes, user } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <List>
          <ListItem button={true} component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.iconText} primary="Home" />
          </ListItem>

          <ListItem button={true} component={Link} to="/localize">
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText className={classes.iconText} primary="Localizar" />
          </ListItem>

          <ListItem button={true} component={Link} to="/information">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText className={classes.iconText} primary="Informações" />
          </ListItem>

          <ListItem button={true} component={Link} to="/events">
            <ListItemIcon>
              <EventNoteIcon />
            </ListItemIcon>
            <ListItemText className={classes.iconText} primary="Eventos" />
          </ListItem>

          {user && user.role === "user" ? (
            <ListItem button={true} component={Link} to="/user">
              <ListItemIcon>
                <PregnantWomanIcon />
              </ListItemIcon>
              <ListItemText className={classes.iconText} primary="Doador" />
            </ListItem>
          ) : null}

          {user && user.role === "institution" ? (
            <ListItem button={true} component={Link} to="/institution">
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText
                className={classes.iconText}
                primary="Instituição"
              />
            </ListItem>
          ) : null}

          {user && user.role === "admin" ? (
            <ListItem button={true} component={Link} to="/administrator">
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText
                className={classes.iconText}
                primary="Administrador"
              />
            </ListItem>
          ) : null}

          {user && user.role ? (
            <ListItem button={true} component={Link} to="/login">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText className={classes.iconText} primary="Logout" />
            </ListItem>
          ) : (
            <ListItem button={true} component={Link} to="/login">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText className={classes.iconText} primary="Login" />
            </ListItem>
          )}
        </List>
      </React.Fragment>
    );
  }
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};

export default connect(mapStateToProps)(withStyles(styles)(MenuList));
