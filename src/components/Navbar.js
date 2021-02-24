import React from "react";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  return (
    <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
      <Typography>React-bootstrap</Typography>
      <Box>
        <Button color="primary">Link</Button>
        <Button color="primary">Link</Button>
      </Box>
      <Box flexGrow={1} textAlign="right">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Navbar;
