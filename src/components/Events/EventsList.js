import React from 'react';

import EventsListItem from './EventsListItem';

export default ({ auth, events, type }) => (
  <div>
    {events
      .filter((event) => event.type === type)
      .map((event) => (
        <EventsListItem auth={auth} key={event._id} {...event} />
      ))}
  </div>
);
