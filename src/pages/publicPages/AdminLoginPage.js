import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, FormWrapper, H2ResAuto } from 'theme/Components';
import FormikAdminLoginForm from 'components/adminLogin/AdminLoginForm';

import { startAdminLogin } from './../../actions/auth';

const AdminLoginPage = ({ startLogin, history }) => (
  <div>
    <Page>
      <Container>
        <FormWrapper>
          <H2ResAuto>Admin login page.</H2ResAuto>
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
