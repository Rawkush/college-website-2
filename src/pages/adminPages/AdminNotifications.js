import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import NotificationItem from './../../components/notifications/NotificationItem';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AdminNotificationPanel = ({ location, notifications, auth }) => (
  <Page>
    <h1>Notifications</h1>
    {notifications.map((notification) => (
      <NotificationItem
        auth={auth}
        location={location ? location.pathname : null}
        key={notification.createdAt}
        {...notification}
      />
    ))}
    <Link to="/admin/notifications/add"> Add Notification</Link>
  </Page>
);

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  auth: state.auth.admin,
});

export default connect(mapStateToProps)(AdminNotificationPanel);
