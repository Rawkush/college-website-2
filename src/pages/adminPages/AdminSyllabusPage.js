import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components

const AdminSyllabusPage = () => (
  <div>
    <h1>Syllabus</h1>
    <Link to="/syllabus/it"> Information Technology</Link>
    <Link to="/syllabus/civil"> Civil</Link>
    <Link to="/syllabus/env"> Environment</Link>
    <Link to="/admin/syllabus/add"> Add Syllabus</Link>
  </div>
);

const mapStateToProps = (state) => ({
  auth: state.auth.admin,
});

export default connect(mapStateToProps)(AdminSyllabusPage);
