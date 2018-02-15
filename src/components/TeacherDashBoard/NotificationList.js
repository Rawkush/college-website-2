import React from 'react';

import NotificationListItem from './NotificationListItem';

export default ({ notifications = [], edit } = {}) => (
  <div>
    <h2>Notifications</h2>
    {notifications.map((notification) => (
      <NotificationListItem key={notification._id} {...notification} edit />
    ))}
  </div>
);
