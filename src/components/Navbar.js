import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@material-ui/core';
import PDF from './imgs/Lindsay.Bordelon.Resume.pdf';

function Navbar() {
    return (
        <Box display="flex" bgcolor="grey.200" p={2}>
            <Typography>Lindsay Bordelon Portfolio</Typography>
            <Box>
                <Button color="primary">
                    <Link to="/About">About</Link>
                </Button>
                <Button color="primary">
                    <Link to="/Portfolio">Portfolio</Link>
                </Button>
                <Button color="primary" target="_blank">
                    <a href={`/${PDF}`}>Resume</a>
                </Button>
            </Box>
        </Box>
    );
}

export default Navbar;
