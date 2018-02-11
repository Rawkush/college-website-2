import React from 'react';
import { Link } from 'react-router-dom';

export default ({ committe, _id, edit }) => (
  <div>
    <h3>{committe}</h3>
    {edit && <Link to={`/teacher/myprofile/editcommitte/${_id}`}>Edit</Link>}
  </div>
);
