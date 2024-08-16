import React from 'react';
import { List, ListItem, ListItemText, IconButton, Container, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const Courses = ({ courses, deleteCourse }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteCourse(id);
  };

  const handleEdit = (id) => {
    navigate(`/edit-course/${id}`);
  };

  const handleInfo = (id) => {
    navigate(`/course-detail/${id}`);
  };

  return (
    <>
      <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Courses
      </Typography>
      <div className='courseCard'>
      <List >
        {courses.map((course) => (
          <ListItem key={course.id}>
              <ListItemText
              primary={course.name}
              secondary={`${course.category} - ${course.duration}`}
            />
            <Typography  align="center">{course.description}</Typography>
            <IconButton  aria-label="info" onClick={() => handleInfo(course.id)}>
                <InfoIcon />
              </IconButton>
              <IconButton  aria-label="edit" onClick={() => handleEdit(course.id)}>
                <EditIcon />
              </IconButton>
              <IconButton  aria-label="delete" onClick={() => handleDelete(course.id)}>
                <DeleteIcon />
              </IconButton>
          </ListItem>
        ))}
      </List>

      </div>
          </Container>
    </>
    
  );
};

export default Courses;
