import React from "react";
import { Box, Typography, Button } from "@material-ui/core";

function Navbar() {
  return (
    <Box display="flex" bgcolor="grey.200" p={2}>
      <Typography>React-bootstrap</Typography>
      <Box>
        <Button color="primary">
          <a href="About">About</a>
        </Button>
        <Button color="primary">
          <a href="Portfolio">Portfolio</a>
        </Button>
        <Button color="primary">Link</Button>
      </Box>
    </Box>
  );
}

export default Navbar;
