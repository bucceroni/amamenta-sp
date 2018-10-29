import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 400,
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
};

function CardFeatures(props) {
  const { classes, title, subtitle, textButton } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
       
            <Typography className={classes.pos} color="textSecondary" noWrap>
              {subtitle}
            </Typography>
       
            <Button variant="contained" color="primary">
              {textButton}
            </Button>
        
      </CardContent>
    </Card>
  );
}

CardFeatures.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleButton: PropTypes.string
};

export default withStyles(styles)(CardFeatures);
