import React from 'react';
import { connect } from 'react-redux';

import { startAdminLogin } from './../../actions/auth';

import FormikAdminLoginForm from './../../components/adminLogin/AdminLoginForm';

const AdminLoginPage = ({ startLogin, history, isAdminLoggedIn }) => {
  if (isAdminLoggedIn) {
    history.push('/admin/dashboard');
  }
  return (
    <div>
      <h2>Admin login page.</h2>
      <FormikAdminLoginForm startLogin={startLogin} history={history} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAdminLoggedIn: state.auth.admin,
});

const mapDispatchToProps = (dispatch) => ({
  startLogin: (username, password) =>
    dispatch(startAdminLogin(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLoginPage);
