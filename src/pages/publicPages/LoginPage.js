import React from 'react';
import { connect } from 'react-redux';

// Styled-Components
import { Page } from './../../theme/Components';

import {
  startLoginTeacher,
  startSetTeacher,
} from './../../actions/teacherPrimary';
import { startSetTeacherSecondary } from './../../actions/teacherSecondary';

import TeacherLoginForm from './../../components/adminDashboard/TeacherRegistrationForm';

const LoginPage = ({ login, setProfile, setSecondary, history }) => (
  <Page>
    <h2>Login or register using...</h2>
    <a href="http://localhost:3000/s/student/auth/google">Google</a>
    <a href="http://localhost:3000/s/student/auth/github">GitHub</a>
    <a href="http://localhost:3000/s/student/auth/linkedin">LinkedIn</a>
    <hr />
    <h2>Teacher login page.</h2>
    <TeacherLoginForm
      onSubmit={login}
      history={history}
      redirect="/teacher/myprofile"
      setProfile={setProfile}
      setSecondary={setSecondary}
      login
    />
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  login: (val) => dispatch(startLoginTeacher(val)),
  setProfile: () => dispatch(startSetTeacher()),
  setSecondary: () => dispatch(startSetTeacherSecondary()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
