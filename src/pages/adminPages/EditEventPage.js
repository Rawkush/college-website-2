import React from 'react';
import { connect } from 'react-redux';

// Component
import EventForm from './../../components/adminDashboard/EventForm';

// Actions
import { startEditEvent, startRemoveEvent } from './../../actions/events';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const EditEventPage = ({ event, history, editEvent, deleteEvent }) => (
  <div>
    <h2>Edit Events</h2>
    {event ? (
      <Page>
        <EventForm
          {...event}
          history={history}
          onSubmit={editEvent}
          deleteEvent={deleteEvent}
          edit
        />
      </Page>
    ) : (
      <p>L</p>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  event: state.events.find((event) => event._id === props.match.params._id),
});

const mapDispatchToProps = (dispatch) => ({
  editEvent: (val, _id) => dispatch(startEditEvent(val, _id)),
  deleteEvent: (_id) => dispatch(startRemoveEvent(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage);
