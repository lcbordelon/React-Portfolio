import React from "react";
import SimpleCard from "../components/Card/Card";
import myPicture from "../components/imgs/LB.PNG";
import "../components/styles.css";

function About() {
  return (
    <div className="container">
      <SimpleCard
        description="Hello! I'm Lindsay!"
        image={myPicture}
        imagetitle="Lindsay Bordelon"
        intro="Welcome to my portfolio! I'm a newbie programmer with a passion for learning more."
      />
    </div>
  );
}

export default About;
