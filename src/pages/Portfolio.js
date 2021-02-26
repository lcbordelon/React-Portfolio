import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Projects from "../projects.json";

class Portfolio extends Component {
  state = {
    Projects,
  };

  render() {
    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       flexGrow: 1,
    //     },
    //     paper: {
    //       padding: theme.spacing(2),
    //       textAlign: "center",
    //       color: theme.palette.text.secondary,
    //     },
    //   }));

    //     const classes = useStyles();

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {this.state.Projects.map((project) => (
              <PortfolioCard
                id={project.id}
                name={project.name}
                image={project.image}
                href={project.href}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Portfolio;
