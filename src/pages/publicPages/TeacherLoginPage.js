import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from './../../actions/teacherPrimary';

import TeacherLoginForm from './../../components/adminDashboard/TeacherRegistrationForm';

const TeacherLoginPage = ({ login, history }) => (
  <div>
    <h2>Admin login page.</h2>
    <TeacherLoginForm onSubmit={login} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  login: ({ email, password }) => dispatch(startLogin(email, password)),
});

export default connect(undefined, mapDispatchToProps)(TeacherLoginPage);
