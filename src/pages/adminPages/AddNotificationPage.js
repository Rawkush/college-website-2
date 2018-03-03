import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startAddNotification } from './../../actions/notifications';

// Component
import NotificationForm from './../../components/adminDashboard/NotificationForm';

import { Page, Container, FormWrapper, H3 } from 'theme/Components';

const AddNotificationPage = ({ addNotification, history }) => (
  <Page>
    <Container>
      <FormWrapper>
        <H3>Add Notification</H3>
        <NotificationForm onSubmit={addNotification} history={history} />
      </FormWrapper>
    </Container>
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addNotification: (val) => dispatch(startAddNotification(val)),
});

export default connect(undefined, mapDispatchToProps)(AddNotificationPage);
