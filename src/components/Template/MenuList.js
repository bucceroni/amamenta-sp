import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import BusinessIcon from "@material-ui/icons/Business";

import styles from "./styles";

class MenuList extends React.Component {
  render() {
    const { classes } = this.props;

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

          <ListItem button={true} component={Link} to="/user">
            <ListItemIcon>
              <PregnantWomanIcon />
            </ListItemIcon>
            <ListItemText className={classes.iconText} primary="Doador" />
          </ListItem>

          <ListItem button={true} component={Link} to="/institution">
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText className={classes.iconText} primary="Instituição" />
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuList);
