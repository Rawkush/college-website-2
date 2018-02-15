import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components

const AdminSyllabusPage = () => (
  <div>
    <h1>Syllabus</h1>
    <Link to="/syllabus/new/it"> Information Technology (New)</Link>
    <Link to="/syllabus/new/civil"> Civil (New)</Link>
    <Link to="/syllabus/new/env"> Environment (New)</Link>
    <Link to="/syllabus/old/it"> Information Technology (Old)</Link>
    <Link to="/syllabus/old/civil"> Civil (Old)</Link>
    <Link to="/syllabus/old/env"> Environment (Old)</Link>
    <Link to="/admin/syllabus/add"> Add Syllabus</Link>
  </div>
);

const mapStateToProps = (state) => ({
  auth: state.auth.admin,
});

export default connect(mapStateToProps)(AdminSyllabusPage);
