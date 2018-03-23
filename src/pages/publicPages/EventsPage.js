import React from 'react';
import { connect } from 'react-redux';
import { Page, H2ResAuto, Container } from 'theme/Components';

import EventsList from './../../components/Events/EventsList';

const Capitilize = (str = 'Events') => {
  if (str === 'cultural') {
    return 'Cultural Events';
  }
  if (str === 'sports') {
    return 'Sports Events';
  }
  return str;
};

const EventsPage = ({ match, events, auth }) => (
  <div>
    <Page>
      <H2ResAuto>{Capitilize(match.params.type)}</H2ResAuto>
      <Container>
        <EventsList events={events} auth={auth} type={match.params.type} />
      </Container>
    </Page>
  </div>
);

const mapStateToProps = (state) => ({
  events: state.events,
  auth: state.auth.admin,
});

export default connect(mapStateToProps)(EventsPage);
