import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";

function Footer() {
  return (
    <footer className="footer">
      <span className="text-center">
        <h5>Lindsay Bordelon 225-505-3694 lcbordelon@gmail.com</h5>
        <IconButton
          className="m-2"
          color="primary"
          aria-label="Linkedin.com"
          onClick={() => window.open("https://github.com/lcbordelon")}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="m-2"
          color="primary"
          aria-label="Linkedin.com"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/lindsay-bordelon-61a57442/"
            )
          }
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </span>
    </footer>
  );
}

export default Footer;
