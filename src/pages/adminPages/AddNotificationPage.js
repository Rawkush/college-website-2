import React from 'react';
import { connect } from 'react-redux';

import { Page, Container, FormWrapper, H2ResAuto } from 'theme/Components';
// Actions
import { startAddNotification } from './../../actions/notifications';

// Component
import NotificationForm from './../../components/adminDashboard/NotificationForm';

const AddNotificationPage = ({ addNotification, history }) => (
  <Page>
    <Container>
      <FormWrapper>
        <H2ResAuto>Add Notification</H2ResAuto>
        <NotificationForm onSubmit={addNotification} history={history} />
      </FormWrapper>
    </Container>
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addNotification: (val) => dispatch(startAddNotification(val)),
});

export default connect(undefined, mapDispatchToProps)(AddNotificationPage);
