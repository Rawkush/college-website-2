import React from 'react';
import { connect } from 'react-redux';

import { startLoginTeacher } from './../../actions/teacherPrimary';

import TeacherLoginForm from './../../components/adminDashboard/TeacherRegistrationForm';

const TeacherLoginPage = ({ login, history }) => (
  <div>
    <h2>Admin login page.</h2>
    <TeacherLoginForm
      onSubmit={login}
      history={history}
      redirect="/teacher/myprofile"
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  login: (val) => dispatch(startLoginTeacher(val)),
});

export default connect(undefined, mapDispatchToProps)(TeacherLoginPage);
