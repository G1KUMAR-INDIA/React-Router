// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import EditCourse from './components/EditCourse';
import CourseDetail from './components/CourseDetail';
import coursesData from './utilies/courses.json';

function App() {
  const [courses, setCourses] = useState(coursesData);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const updateCourse = (updatedCourse) => {
    setCourses(
      courses.map(course =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses courses={courses} />} />
        <Route path="/course-detail/:id" element={<CourseDetail courses={courses} />} />
        <Route path="/add-course" element={<AddCourse addCourse={addCourse} />} />
        <Route path="/edit-course/:id" element={<EditCourse courses={courses} updateCourse={updateCourse} />} />
        <Route path="/course-detail/:id" element={<CourseDetail courses={courses} />} />
      </Routes>
    </Router>
  );
}

export default App;
