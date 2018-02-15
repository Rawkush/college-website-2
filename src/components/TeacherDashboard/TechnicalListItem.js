import React from 'react';
import { Link } from 'react-router-dom';

export default ({ technicalSkill, _id, edit }) => (
  <div>
    <h3>{technicalSkill}</h3>
    {edit && (<Link to = {`/teacher/myprofile/edittechnicalSkill/${_id}`}>Edit</Link> )}
  </div>
);
