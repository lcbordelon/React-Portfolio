import React from "react";
import SimpleCard from "../components/Card/Card";
import "../components/imgs/LB.PNG";

function About() {
  return (
    <div className="container">
      <SimpleCard
        title="Hello! I'm Lindsay!"
        description="blah blah blah react"
        image="../components/imgs/LB.PNG"
        imagetitle="Lindsay Bordelon"
      />
    </div>
  );
}

export default About;
