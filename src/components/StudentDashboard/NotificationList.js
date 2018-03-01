import React from 'react';

// Components
import NotificationListItem from './NotificationListItem';

export default ({ notifications, markAsRead } = {}) => (
  <div>
    {notifications ? (
      notifications.map((notification) => (
        <NotificationListItem
          markAsRead={markAsRead}
          key={notification._id}
          {...notification._ref}
          read={notification.read}
          notificationId={notification._id}
        />
      ))
    ) : (
      <p> Loading ...</p>
    )}
  </div>
);
