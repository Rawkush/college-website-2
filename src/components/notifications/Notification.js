import React from 'react';

import NotificationItem from './NotificationItem';

const notificationArray = [
  {
    text: 'List of students who did not registered.',
    date: new Date(),
    tags: ['2nd Year', 'IT', 'Computer Science'],
    url: 'http://google.com',
    key: 1,
  },
  {
    text: 'List of students who did not registered.',
    date: new Date(),
    tags: ['2nd Year', 'IT', 'Computer Science'],
    url: 'http://google.com',
    key: 2,
  },
  {
    text: 'List of students who did not registered.',
    date: new Date(),
    tags: ['2nd Year', 'IT', 'Computer Science'],
    url: 'http://google.com',
    key: 3,
  },
  {
    text: 'List of students who did not registered.',
    date: new Date(),
    tags: ['2nd Year', 'IT', 'Computer Science'],
    url: 'http://google.com',
    key: 4,
  },
];

const Notification = () => (
  <div>
    <h2>Notifications</h2>
    {notificationArray.map(({ text, date, tags, url, key }) => (
      <div key={key}>
        <NotificationItem text={text} date={date} tags={tags} url={url} />
      </div>
    ))}
  </div>
);

export default Notification;
