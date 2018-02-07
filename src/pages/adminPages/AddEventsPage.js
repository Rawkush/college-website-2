import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startAddEvent } from './../../actions/events';

// Component
import EventForm from './../../components/adminDashboard/EventForm';

const AddEventPage = ({ addEvent, history }) => (
  <div>
    <h2>Add Event</h2>
    <EventForm onSubmit={addEvent} history={history} />
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  addEvent: (val) => dispatch(startAddEvent(val)),
});

export default connect(undefined, mapDispatchToProps)(AddEventPage);
