import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar,Toolbar,Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ padding: 7, marginLeft: "35%", marginRight: "35%" }}
        >
          <Typography variant="h6" color="inherit">
            Maximl labs Weather app - Rittesh.P.V (rv7685@srmist.edu.in)
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
