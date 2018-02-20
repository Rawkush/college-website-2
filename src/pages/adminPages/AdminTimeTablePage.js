import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AdminTimeTablePage = () => (
  <Page>
    <h1>Time Table</h1>
    <Link to="/timetable/even"> Even </Link>
    <Link to="/timetable/odd"> Odd</Link>
    <Link to="/admin/timetable/add"> Add Time Table</Link>
  </Page>
);

export default AdminTimeTablePage;
