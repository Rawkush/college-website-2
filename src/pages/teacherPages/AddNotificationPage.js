import React from 'react';
import { connect } from 'react-redux';

// Actions
import { Page, H2ResAuto, FormWrapper, Container } from 'theme/Components';
import { startAddNotification } from './../../actions/teacherSecondary';
// Component
import NotificationForm from './../../components/TeacherDashBoard/NotificationForm';

const AddNotificationPage = ({ addNotification, history }) => (
  <Page>
    <Container>
      <H2ResAuto>Add Notifications</H2ResAuto>
      <FormWrapper>
        <NotificationForm onSubmit={addNotification} history={history} />
      </FormWrapper>
    </Container>
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addNotification: (val) => dispatch(startAddNotification(val)),
});

export default connect(undefined, mapDispatchToProps)(AddNotificationPage);
