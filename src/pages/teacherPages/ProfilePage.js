import React from 'react';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';

const TeacherProfilePage = ({ teacher, secondary }) => (
  <div>
    <h2> myProfile </h2>
  </div>
);

const mapStateToProps = (state) => ({
  teacher: state.studentPrimary,
  secondary: state.studentSecondary,
});

export default connect(mapStateToProps)(TeacherProfilePage);
// all the pages needs to be imported here and displayed this just for routing;
