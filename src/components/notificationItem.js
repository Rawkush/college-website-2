import React from 'react';
import moment from 'moment';

const NotificationItem = ({ text, tags, date, url }) => (
  <div>
    <a href={url}>
      <p>{text}</p>
      {tags.map((tag) => <p>{tag}</p>)}
      <p>{moment(date).format('DD MMM, YYYY')}</p>
    </a>
    <hr />
  </div>
);

export default NotificationItem;
