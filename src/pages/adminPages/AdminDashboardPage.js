import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>Admin Dashboard</h1>
    <Link to="/admin/notifications"> Notifications </Link>
    <Link to="/admin/events"> Events </Link>
    <Link to="/admin/timetable"> Time Table </Link>
    <Link to="/admin/syllabus"> Syllabus </Link>
    <Link to="/admin/registerteacher"> Register Teacher </Link>
  </div>
);
