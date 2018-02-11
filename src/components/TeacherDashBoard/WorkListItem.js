import React from 'react';
import { Link } from 'react-router-dom';

export default ({ title, _id, edit, description }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    {edit && <Link to={`/teacher/editwork/${_id}`}>Edit</Link>}
  </div>
);
