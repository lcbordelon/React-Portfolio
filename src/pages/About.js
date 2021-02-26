import React from "react";
import SimpleCard from "../components/Card/Card";
import myPicture from "../components/imgs/LB.PNG";
import "../components/styles.css";


function About() {

  return (
    <div className="container">
      <SimpleCard
        title="Hello! I'm Lindsay!"
        description="blah blah blah react"
        image={myPicture}
        imagetitle="Lindsay Bordelon"
      />
    </div>
  );
}

export default About;
