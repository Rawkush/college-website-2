import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default ({ _id, title, wef, file, auth }) => (
  <div>
    <p>
      <a target="_blank" href={file}>
        {title}
      </a>
    </p>
    <p>{moment(wef).format('DD MMM, YYYY')}</p>
    {auth && <Link to={`/admin/timetable/edit/${_id}`}>Edit</Link>}
  </div>
);
