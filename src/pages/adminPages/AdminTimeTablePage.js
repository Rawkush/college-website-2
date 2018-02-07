import React from 'react';
import { Link } from 'react-router-dom';

// Components

const AdminTimeTablePage = () => (
  <div>
    <h1>Syllabus</h1>
    <Link to="/timetable/even"> Even </Link>
    <Link to="/timetable/odd"> Odd</Link>
    <Link to="/admin/timetable/add"> Add Time Table</Link>
  </div>
);

export default AdminTimeTablePage;
