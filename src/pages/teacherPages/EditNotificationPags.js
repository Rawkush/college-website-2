import React from 'react';
import { connect } from 'react-redux';

import { Page, Container, FormWrapper, H2ResAuto } from 'theme/Components';
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
  <Page>
    <Container>
      <H2ResAuto>Edit Notification</H2ResAuto>
      <FormWrapper>
        <NotificationForm
          onSubmit={editNotification}
          history={history}
          edit
          {...notification}
          remove={removeNotification}
        />
      </FormWrapper>
    </Container>
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
