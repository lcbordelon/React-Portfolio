import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import Projects from "../projects";

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
      <div className="container">
        <div className="row" style={{ width: "100%" }}>
          {this.state.Projects.map((project) => (
            <div className="col-md-6">
              <PortfolioCard
                style={{ margin: "auto" }}
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                href={project.href}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
