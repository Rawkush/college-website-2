import React from 'react';

export default ({ title, description, file, link, tags = {} }) => (
  <div>
    <a href={link}>
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
