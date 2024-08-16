// src/components/EditCourse.js
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const EditCourse = ({ courses, updateCourse }) => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    name: '',
    category: '',
    duration: '',
    image:''
  });

  useEffect(() => {
    const selectedCourse = courses.find(c => c.id === parseInt(id));
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [id, courses]);

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCourse(course);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Edit Course
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Course Name"
          fullWidth
          margin="normal"
          name="name"
          value={course.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Course Category"
          fullWidth
          margin="normal"
          name="category"
          value={course.category}
          onChange={handleChange}
          required
        />
        <TextField
          label="Course Duration"
          fullWidth
          margin="normal"
          name="duration"
          value={course.duration}
          onChange={handleChange}
          required
        />
        <TextField
          label="Course View"
          fullWidth
          margin="normal"
          name="duration"
          value={course.image}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Update Course
        </Button>
      </form>
    </Container>
  );
};

export default EditCourse;
