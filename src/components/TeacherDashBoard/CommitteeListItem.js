import React from 'react';
import { Link } from 'react-router-dom';

export default ({ name, designation, status, _id, edit }) => (
  <div>
    <h3>{name}</h3>
    <p>{designation}</p>
    <p>{status}</p>
    {edit && <Link to={`/teacher/editcommittee/${_id}`}>Edit</Link>}
  </div>
);
