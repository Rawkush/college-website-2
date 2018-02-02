import React from 'react';
import { connect } from 'react-redux';

// Component
import NotificationForm from './../../components/adminDashboard/NotificationForm';

// Actions
import {
  startEditNotification,
  startRemoveNotification,
} from './../../actions/notifications';

const EditNotificationPage = ({
  notification,
  history,
  editNotification,
  deleteNotification,
}) => (
  <div>
    <h2>Edit Notifications</h2>
    {notification ? (
      <NotificationForm
        {...notification}
        history={history}
        onSubmit={editNotification}
        deleteNotification={deleteNotification}
      />
    ) : (
      <p>L</p>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  notification: state.notifications.find(
    (notification) => notification._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editNotification: (val, _id) => dispatch(startEditNotification(val, _id)),
  deleteNotification: (_id) => dispatch(startRemoveNotification(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  EditNotificationPage
);
