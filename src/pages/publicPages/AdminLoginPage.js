import React from 'react';
import { connect } from 'react-redux';

import { startAdminLogin } from './../../actions/auth';

import FormikAdminLoginForm from './../../components/adminLogin/AdminLoginForm';

// eslint-disable-next-line
import { Page, Container, FormWrapper, H3 } from 'theme/Components';

const AdminLoginPage = ({ startLogin, history }) => (
  <div>
    <Page>
      <Container>
        <FormWrapper>
          <H3>Admin login page.</H3>
          <FormikAdminLoginForm startLogin={startLogin} history={history} />
        </FormWrapper>
      </Container>
    </Page>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: (username, password) =>
    dispatch(startAdminLogin(username, password)),
});

export default connect(undefined, mapDispatchToProps)(AdminLoginPage);
