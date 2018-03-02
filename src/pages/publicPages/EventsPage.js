import React from 'react';
import { connect } from 'react-redux';

import EventsList from './../../components/Events/EventsList';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const EventsPage = ({ match, events, auth }) => (
  <div>
    <Page>
      <h2>{match.params.type}</h2>
      <EventsList events={events} auth={auth} type={match.params.type} />
    </Page>
  </div>
);

const mapStateToProps = (state) => ({
  events: state.events,
  auth: state.auth.admin,
});

export default connect(mapStateToProps)(EventsPage);
