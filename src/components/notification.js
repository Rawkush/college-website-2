import React from 'react';

import NotificationItem from './notificationItem';

const notificationArray = [
  {
    text: 'List of students who did not registered.',
    date: new Date().toDateString(),
    tags: ['2nd Year', 'IT', 'Computer Science'],
    url: 'http://google.com',
  },
  {
    text: 'List of students who did not registered.',
    date: new Date().toDateString(),
    tags: ['2nd Year', 'IT', 'Computer Science'],
    url: 'http://google.com',
  },
  {
    text: 'List of students who did not registered.',
    date: new Date().toDateString(),
    tags: ['2nd Year', 'IT', 'Computer Science'],
    url: 'http://google.com',
  },
  {
    text: 'List of students who did not registered.',
    date: new Date().toDateString(),
    tags: ['2nd Year', 'IT', 'Computer Science'],
    url: 'http://google.com',
  },
];

const Notification = () => (
  <div>
    <h2>Notifications</h2>
    {notificationArray.map(({ text, date, tags, url }) => (
      <div>
        <NotificationItem text={text} date={date} tags={tags} url={url} />
      </div>
    ))}
  </div>
);

export default Notification;
