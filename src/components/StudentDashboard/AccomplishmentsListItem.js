import React from 'react';
import { Link } from 'react-router-dom';

export default ({ title, photo, description, _id, edit }) => (
  <div>
    <h3>{title}</h3>
    <img
      src={`http://localhost:3000/${photo}`}
      alt="accomplishment"
      height="100px"
      width="100px"
    />
    <p>{description}</p>
    {edit && (
      <Link to={`/student/myprofile/editaccomplishment/${_id}`}>Edit</Link>
    )}
  </div>
);
