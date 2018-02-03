import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const NotificationItem = ({
  title,
  tags,
  createdAt,
  link,
  file,
  _id,
  location,
  auth,
}) => (
  <div>
    <a href={link}>
      <p>{title}</p>
      {tags.map((tag) => <p key={tag}>{tag}</p>)}
      <p>{moment(createdAt).format('DD MMM, YYYY')}</p>
    </a>
    <a href={file} target="_blank">
      Download File
    </a>
    {location === '/admin/notifications' &&
      auth && <Link to={`/admin/notifications/edit/${_id}`}>Edit</Link>}
    <hr />
  </div>
);

export default NotificationItem;
