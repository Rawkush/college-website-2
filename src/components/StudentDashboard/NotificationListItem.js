import React from 'react';

export default ({
  title,
  description,
  file,
  link,
  read,
  tags = {},
  markAsRead,
  _id,
}) => (
  <div>
    <a
      href={link}
      onClick={() => {
        if (!read) {
          markAsRead(_id);
        }
      }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Tags:</p>
      {tags.branch ? <p>{tags.branch}</p> : ''}
      {tags.year ? <p>{tags.year}</p> : ''}
      {tags.rollNo ? <p>{tags.rollNo}</p> : ''}
    </a>
    <a href={file}>Download File</a>
  </div>
);
