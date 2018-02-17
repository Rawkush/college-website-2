import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  startEditNotification,
  startRemoveNotification,
} from './../../actions/teacherSecondary';
// Component
import NotificationForm from './../../components/TeacherDashBoard/NotificationForm';

const AddNotificationPage = ({
  editNotification,
  history,
  notification,
  removeNotification,
}) => (
  <div>
    <h2>Add Notification</h2>
    <NotificationForm
      onSubmit={editNotification}
      history={history}
      edit
      {...notification}
      remove={removeNotification}
    />
  </div>
);

const mapStateToProps = (state, props) => ({
  notification: state.teacherSecondary.notifications.find(
    (notification) => notification._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editNotification: (val) => dispatch(startEditNotification(val)),
  removeNotification: (_id) => dispatch(startRemoveNotification(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AddNotificationPage
);
