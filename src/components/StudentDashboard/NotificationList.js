import React from 'react';

// Components
import NotificationListItem from './NotificationListItem';

export default ({ notifications }) => (
  <div>
    {notifications.map((notification) => (
      <NotificationListItem key={notification._id} {...notification._ref} />
    ))}
  </div>
);
