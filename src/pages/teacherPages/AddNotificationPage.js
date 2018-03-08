import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startAddNotification } from './../../actions/teacherSecondary';
// Component
import NotificationForm from './../../components/TeacherDashBoard/NotificationForm';

// eslint-disable-next-line
import { Page, H2 } from 'theme/Components';

const H3 = H2.extend`
font-size: 1.3;
text-align: center;
padding: 15px;
`;

const AddNotificationPage = ({ addNotification, history }) => (
  <Page>
    <H3>Add Notifications</H3>
    <NotificationForm onSubmit={addNotification} history={history} />
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addNotification: (val) => dispatch(startAddNotification(val)),
});

export default connect(undefined, mapDispatchToProps)(AddNotificationPage);
