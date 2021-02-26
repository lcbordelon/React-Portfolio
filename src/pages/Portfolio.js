import React from "react";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <PortfolioCard
            title="Hello! I'm Lindsay!"
            description="blah blah blah react"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Portfolio;
