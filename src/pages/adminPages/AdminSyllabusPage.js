import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AdminSyllabusPage = () => (
  <Page>
    <h1>Syllabus</h1>
    <Link to="/syllabus/new/it"> Information Technology (New)</Link>
    <Link to="/syllabus/new/civil"> Civil (New)</Link>
    <Link to="/syllabus/new/env"> Environment (New)</Link>
    <Link to="/syllabus/old/it"> Information Technology (Old)</Link>
    <Link to="/syllabus/old/civil"> Civil (Old)</Link>
    <Link to="/syllabus/old/env"> Environment (Old)</Link>
    <Link to="/admin/syllabus/add"> Add Syllabus</Link>
  </Page>
);

const mapStateToProps = (state) => ({
  auth: state.auth.admin,
});

export default connect(mapStateToProps)(AdminSyllabusPage);
