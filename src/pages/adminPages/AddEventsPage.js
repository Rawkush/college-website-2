import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, FormWrapper, H3 } from 'theme/Components';

// Actions
import { startAddEvent } from './../../actions/events';

// Component
import EventForm from './../../components/adminDashboard/EventForm';

const AddEventPage = ({ addEvent, history }) => (
  <Page>
    <Container>
      <FormWrapper>
        <H3>Add Event</H3>
        <EventForm onSubmit={addEvent} history={history} />
      </FormWrapper>
    </Container>
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addEvent: (val) => dispatch(startAddEvent(val)),
});

export default connect(undefined, mapDispatchToProps)(AddEventPage);
