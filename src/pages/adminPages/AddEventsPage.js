import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startAddEvent } from './../../actions/events';

// Component
import EventForm from './../../components/adminDashboard/EventForm';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddEventPage = ({ addEvent, history }) => (
  <Page>
    <h2>Add Event</h2>
    <EventForm onSubmit={addEvent} history={history} />
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addEvent: (val) => dispatch(startAddEvent(val)),
});

export default connect(undefined, mapDispatchToProps)(AddEventPage);
