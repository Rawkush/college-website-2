import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, FormWrapper, H3 } from 'theme/Components';

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
    {notification ? (
      <Page>
        <Container>
          <FormWrapper>
            <H3>Edit Notifications</H3>
            <NotificationForm
              {...notification}
              history={history}
              onSubmit={editNotification}
              deleteNotification={deleteNotification}
              edit
            />
          </FormWrapper>
        </Container>
      </Page>
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
