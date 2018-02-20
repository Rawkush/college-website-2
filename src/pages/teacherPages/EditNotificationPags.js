import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  startEditNotification,
  startRemoveNotification,
} from './../../actions/teacherSecondary';
// Component
import NotificationForm from './../../components/TeacherDashBoard/NotificationForm';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddNotificationPage = ({
  editNotification,
  history,
  notification,
  removeNotification,
}) => (
  <Page>
    <h2>Add Notification</h2>
    <NotificationForm
      onSubmit={editNotification}
      history={history}
      edit
      {...notification}
      remove={removeNotification}
    />
  </Page>
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
