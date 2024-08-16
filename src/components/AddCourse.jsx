// src/components/AddCourse.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const AddCourse = ({ addCourse }) => {
  const [courseName, setCourseName] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseModule, setCourseModule] = useState('')
  const [courseImage,setCourseImage]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      id: Date.now(),
      name: courseName,
      category: courseCategory,
      duration: courseDuration,
      module: courseModule,
      image: courseImage,
    };
    addCourse(newCourse);
    setCourseName('');
    setCourseCategory('');
    setCourseDuration('');
    setCourseModule('');
    setCourseImage('');
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Add Course
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Course Name"
          fullWidth
          margin="normal"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
        <TextField
          label="Course Category"
          fullWidth
          margin="normal"
          value={courseCategory}
          onChange={(e) => setCourseCategory(e.target.value)}
          required
        />
        <TextField
          label="Course Duration"
          fullWidth
          margin="normal"
          value={courseDuration}
          onChange={(e) => setCourseDuration(e.target.value)}
          required
        />
        <TextField
          label="Course Top 5 Modules"
          fullWidth
          margin="normal"
          value={courseModule}
          onChange={(e) => setCourseModule(e.target.value)}
          required
        />
        <TextField
          label="Course Poster"
          fullWidth
          margin="normal"
          value={courseImage}
          onChange={(e) => setCourseImage(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Add Course
        </Button>
      </form>
    </Container>
  );
};

export default AddCourse;
