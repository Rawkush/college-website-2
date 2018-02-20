import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startAddNotification } from './../../actions/notifications';

// Component
import NotificationForm from './../../components/adminDashboard/NotificationForm';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddNotificationPage = ({ addNotification, history }) => (
  <Page>
    <h2>Add Notification</h2>
    <NotificationForm onSubmit={addNotification} history={history} />
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addNotification: (val) => dispatch(startAddNotification(val)),
});

export default connect(undefined, mapDispatchToProps)(AddNotificationPage);
