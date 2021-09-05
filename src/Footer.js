import { Container, Typography, Link, makeStyles } from "@material-ui/core";

import React from "react";

function Copyright() {
  return (
    <Typography>
      {"Copyright "}
      <Link href="https://www.linkedin.com/in/antonio-molina-326768124/">
        Antonio Molina
      </Link>
      {" " + new Date().getFullYear()}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6)
  }
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="h6">Antonio Molina Freelance</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Anyone can work with me!
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
