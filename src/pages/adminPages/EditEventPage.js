import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, FormWrapper, H3 } from 'theme/Components';

// Component
import EventForm from './../../components/adminDashboard/EventForm';

// Actions
import { startEditEvent, startRemoveEvent } from './../../actions/events';

const EditEventPage = ({ event, history, editEvent, deleteEvent }) => (
  <div>
    {event ? (
      <Page>
        <Container>
          <FormWrapper>
            <H3>Edit Events</H3>
            <EventForm
              {...event}
              history={history}
              onSubmit={editEvent}
              deleteEvent={deleteEvent}
              edit
            />
          </FormWrapper>
        </Container>
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
