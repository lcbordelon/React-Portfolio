import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import PDF from "./imgs/Lindsay.Bordelon.Resume.pdf";

function Navbar() {
  return (
    <Box display="flex" bgcolor="grey.200" p={2}>
      <Typography>Lindsay Bordelon Portfolio</Typography>
      <Box>
        <Button color="primary">
          <a href="About">About</a>
        </Button>
        <Button color="primary">
          <a href="Portfolio">Portfolio</a>
        </Button>
        {/* <Button color="primary">
          <a href="Contact Me">Contact Me</a>
        </Button> */}
        <Button color="primary" target="_blank">
          <a href={PDF}>Resume</a>
        </Button>
      </Box>
    </Box>
  );
}

export default Navbar;
