import React from 'react';
import { connect } from 'react-redux';

import { startAdminLogin } from './../../actions/auth';

import FormikAdminLoginForm from './../../components/adminLogin/AdminLoginForm';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AdminLoginPage = ({ startLogin, history }) => (
  <div>
    <Page>
      <h2>Admin login page.</h2>
      <FormikAdminLoginForm startLogin={startLogin} history={history} />
    </Page>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: (username, password) =>
    dispatch(startAdminLogin(username, password)),
});

export default connect(undefined, mapDispatchToProps)(AdminLoginPage);
