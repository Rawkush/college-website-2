import React from 'react';
import { Link } from 'react-router-dom';

export default ({ work, _id, edit }) => (
  <div>
    <h3>{work}</h3>
    {edit && (<Link to = {`/teacher/myprofile/editwork/${_id}`}>Edit</Link> )}
  </div>
);
