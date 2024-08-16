// src/components/Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = (courses) => {
  
  
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to IT and Non-IT Training Institute
      </Typography>
      <Typography variant="body1">
        We offer a variety of courses to help you advance your career.
      </Typography>
      <Button
        sx={{ color: "success.main", bgcolor: "text.primary" }}
        component={Link}
        to="/courses"
      >
        Click here to view Courses
      </Button>
      <br/>
      <img src="https://www.skoolbeep.com/online-classes/assets/img/welcome/first.jpg" alt="Technology"/>
    </Container>
  );
};

export default Home;
