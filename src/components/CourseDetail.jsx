// src/components/CourseDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {Box} from "@mui/material";

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  return (
    <Container>
      {course ? (
        <>
          <Typography variant="h4" component="h1" gutterBottom sx={{ bgcolor: 'secondary.main'} }>
            {course.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Category: {course.category}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Duration: {course.duration}
          </Typography>
          <Typography variant="body1">{course.description}</Typography>
          <Typography variant="h6" gutterBottom>
            Modules:
          </Typography>
          <Typography variant="body1">1-{course.modules[0]}</Typography>
          <Typography variant="body1">2-{course.modules[1]}</Typography>
          <Typography variant="body1">3-{course.modules[2]}</Typography>
          <Typography variant="body1">4-{course.modules[3]}</Typography>
          <Typography variant="body1">5-{course.modules[4]}</Typography>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt={course.name}
            src={course.image}
          />
        </>
      ) : (
        <Typography variant="h6" color="error">
          Course not found.
        </Typography>
      )}
      <br/>
      <Button
        sx={{ color: "success.main", bgcolor: "text.primary" }}
        component={Link}
        to="/courses"
      >
        Back to Courses
      </Button>
    </Container>
  );
};

export default CourseDetail;
