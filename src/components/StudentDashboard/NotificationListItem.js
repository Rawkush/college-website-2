import React from 'react';

export default ({
  title,
  description,
  file,
  link,
  read,
  tags = {},
  markAsRead,
  notificationId,
} = {}) => (
  <div>
    <a
      href={link}
      onClick={() => {
        if (!read) {
          markAsRead(notificationId);
        }
      }}
      target="_blank"
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Tags:</p>
      {tags.branch ? <p>{tags.branch}</p> : ''}
      {tags.year ? <p>{tags.year}</p> : ''}
      {tags.rollNo ? <p>{tags.rollNo}</p> : ''}
    </a>
    <a href={file} target="_blank">
      Download File
    </a>
  </div>
);
