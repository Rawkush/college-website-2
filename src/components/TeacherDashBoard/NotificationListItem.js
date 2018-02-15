import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  title = '',
  description = '',
  file = '',
  link = '',
  tags = {},
  _id,
  edit,
} = {}) => (
  <div>
    <a href={link}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
    {tags.branch ? <p>{tags.branch}</p> : ''}
    {tags.year ? <p>{tags.year}</p> : ''}
    {tags.rollNo ? <p>{tags.rollNo}</p> : ''}
    {file && <p>Download File</p>}
    {edit && <Link to={`/teacher/editnotification/${_id}`}>Edit</Link>}
  </div>
);
