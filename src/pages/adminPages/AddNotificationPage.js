import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startAddNotification } from './../../actions/notifications';

// Component
import NotificationForm from './../../components/adminDashboard/NotificationForm';

const AddNotificationPage = ({ addNotification, history }) => (
  <div>
    <h2>Add Notification</h2>
    <NotificationForm onSubmit={addNotification} history={history} />
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  addNotification: (val) => dispatch(startAddNotification(val)),
});

export default connect(undefined, mapDispatchToProps)(AddNotificationPage);
