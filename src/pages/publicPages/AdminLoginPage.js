import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from './../../actions/adminAuth';

import FormikAdminLoginForm from './../../components/adminLogin/AdminLoginForm';

const AdminLoginPage = (props) => (
  <div>
    <h2>Admin login page.</h2>
    <FormikAdminLoginForm
      startLogin={props.startLogin}
      history={props.history}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: (username, password) => dispatch(startLogin(username, password)),
});

export default connect(undefined, mapDispatchToProps)(AdminLoginPage);
