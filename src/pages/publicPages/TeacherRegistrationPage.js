import React from 'react';
import { connect } from 'react-redux';

import FormikTeacherRegistrationForm from './../../components/registration/teacherRegistrationForm';

import { startAddTeacher } from './../../actions/teacherPrimary';

const TeacherRegistrationPage = ({ addTeacher, history }) => (
  <div>
    <FormikTeacherRegistrationForm onSubmit={addTeacher} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addTeacher: (data) => dispatch(startAddTeacher(data)),
});

export default connect(undefined, mapDispatchToProps)(TeacherRegistrationPage);
