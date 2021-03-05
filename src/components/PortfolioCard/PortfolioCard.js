import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  // media: {
  //   height: 0,
  //   paddingTop: "56.25%", // 16:9,
  //   marginTop: "30",
  // },
});

export default function PortfolioCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} id={props.id}>
      <CardMedia style={{ height: 250 }} 
      component="img" 
      image={props.image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          name={props.name}
        ></Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={props.href}>
          See Project
        </Button>
      </CardActions>
    </Card>
  );
}
