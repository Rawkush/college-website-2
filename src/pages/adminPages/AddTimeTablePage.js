import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, FormWrapper, H3 } from 'theme/Components';

// Actions
import { startAddTimeTable } from './../../actions/timeTable';

// Component
import TimeTableForm from './../../components/adminDashboard/TimeTableForm';

const AddSyllabusPage = ({ addTimeTable, history }) => (
  <Page>
    <Container>
      <FormWrapper>
        <H3>Add Time Table</H3>
        <TimeTableForm history={history} onSubmit={addTimeTable} />
      </FormWrapper>
    </Container>
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addTimeTable: (val) => dispatch(startAddTimeTable(val)),
});

export default connect(undefined, mapDispatchToProps)(AddSyllabusPage);
