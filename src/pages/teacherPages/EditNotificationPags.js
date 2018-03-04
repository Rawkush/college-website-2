import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const H3 = styled.h2`
font-size: 1.3;
text-align: center;
padding: 15px;
`;
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
   {editNotification ?<H3>Edit Notifications</H3>:<H3>Add Notifications</H3>  } 
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
