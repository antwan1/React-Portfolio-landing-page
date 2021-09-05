import React, { useEffect, useState } from "react";

import Container from "@material-ui/core/Container";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  makeStyles,
  MenuItem
} from "@material-ui/core";
import { SentimentSatisfied } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  siteTitle: {
    fontWeight: "bold",
    letterSpacing: 1.5
  },
  Toolbar: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  },
  menuBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: { flexDirection: "row" }
  },

  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: { paddingLeft: theme.spacing(3) },

    color: "white"
  }
}));

export default function NavigationBar() {
  const [state, setState] = useState({
    toggleMenu: false,
    toggleMenuOpen: false
  });
  const { toggleMenu, toggleMenuOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, toggleMenu: true }))
        : setState((prevState) => ({ ...prevState, toggleMenu: false }));
    };
    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const classes = useStyles();
  const displayToggleMenu = () => {
    const handleToggleMenuOpen = () =>
      setState((prevState) => ({
        ...prevState,
        toggleMenuOpen: true
      }));

    const handleToggleMenuClose = () =>
      setState((prevState) => ({
        ...prevState,
        toggleMenuOpen: false
      }));

    return (
      <Toolbar>
        <IconButton
          {...{
            onClick: handleToggleMenuOpen
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: toggleMenuOpen,
            onClose: handleToggleMenuClose
          }}
        >
          <div>{getToggleMenuOptions()}</div>
        </Drawer>
      </Toolbar>
    );
  };
  getToggleMenuOptions = () => {
    return (
      <Box>
        {[" home ", " about me ", " contacts "].map((menuOption) => (
          <MenuItem>{menuOption}</MenuItem>
        ))}
      </Box>
    );
  };
  const displayLargeMenu = () => {
    return (
      <Toolbar className={classes.Toolbar}>
        <Typography className={classes.siteTitle}>
          Antonio Molina Freelance
        </Typography>
        <Box className={classes.menuBox}>
          {[" home ", " about me ", " contacts "].map((menuOption) => (
            <Link
              component="button"
              variant="body1"
              className={classes.menuOption}
            >
              {menuOption.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Toolbar>
    );
  };
  return (
    <Container>
      <AppBar>{toggleMenu ? displayToggleMenu() : displayLargeMenu()}</AppBar>
    </Container>
  );
}
