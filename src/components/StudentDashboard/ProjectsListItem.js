import React from 'react';
import { Link } from 'react-router-dom';

export default ({ title, description, link, _id, edit } = {}) => (
  <div>
    <h3>{title}</h3>
    <a href={link}>Visit this project at : {link}</a>
    <p>{description}</p>
    {edit && <Link to={`/student/myprofile/editproject/${_id}`}>Edit</Link>}
  </div>
);
