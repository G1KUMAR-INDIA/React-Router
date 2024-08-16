// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          IT and Non-IT Training Institute
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/courses">
          Courses
        </Button>
        <Button color="inherit" component={Link} to="/add-course">
          Add Course
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
