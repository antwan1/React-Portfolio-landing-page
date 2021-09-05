import {
  Card,
  CardActions,
  CardHeader,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import ArrowForward from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles(() => ({
  cardImage: {
    height: 300
  }
}));
export default function GridItem(props) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title={props.title} subheader="reccomended for you" />

      <CardMedia
        className={classes.cardImage}
        image={props.image}
        title="Excel Masterclass"
      />

      <CardContent>
        <Typography>{props.description}</Typography>
      </CardContent>

      <CardActions>
        <IconButton aria-label="visit page">
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  );
}
