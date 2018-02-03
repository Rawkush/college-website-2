import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import NotificationItem from './../../components/notifications/NotificationItem';

const AdminNotificationPanel = ({ location, notifications, auth }) => (
  <div>
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
  </div>
);

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  auth: state.admin.auth,
});

export default connect(mapStateToProps)(AdminNotificationPanel);
