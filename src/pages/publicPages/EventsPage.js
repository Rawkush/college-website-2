import React from 'react';
import { connect } from 'react-redux';

import EventsList from './../../components/Events/EventsList';

const EventsPage = ({ match, events, auth }) => (
  <div>
    <h2>{match.params.type}</h2>
    <EventsList events={events} auth={auth} type={match.params.type} />
  </div>
);

const mapStateToProps = (state) => ({
  events: state.events,
  auth: state.admin.auth,
});

export default connect(mapStateToProps)(EventsPage);
