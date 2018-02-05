import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EventsListItem = ({ name, date, place, _id, auth }) => (
  <div>
    <Link to={`/events/view/${_id}`}>
      <h3>{name}</h3>
    </Link>
    <p>{moment(date).format('dd MMM, yyyy')}</p>
    <p>{place}</p>
    {auth && <Link to={`/admin/events/edit/${_id}`}>Edit</Link>}
  </div>
);

export default EventsListItem;
