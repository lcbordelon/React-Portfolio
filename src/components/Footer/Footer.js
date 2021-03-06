import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <footer className="footer">
      <span className="text-center">
        <h5>Lindsay Bordelon 225-505-3694 lcbordelon@gmail.com</h5>
        <GitHubIcon></GitHubIcon>
        <LinkedInIcon></LinkedInIcon>
      </span>
    </footer>
  );
}

export default Footer;
