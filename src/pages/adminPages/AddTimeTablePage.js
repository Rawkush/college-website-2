import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, FormWrapper, H2ResAuto } from 'theme/Components';

// Actions
import { startAddTimeTable } from './../../actions/timeTable';

// Component
import TimeTableForm from './../../components/adminDashboard/TimeTableForm';

const AddSyllabusPage = ({ addTimeTable, history }) => (
  <Page>
    <Container>
      <FormWrapper>
        <H2ResAuto>Add Time Table</H2ResAuto>
        <TimeTableForm history={history} onSubmit={addTimeTable} />
      </FormWrapper>
    </Container>
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addTimeTable: (val) => dispatch(startAddTimeTable(val)),
});

export default connect(undefined, mapDispatchToProps)(AddSyllabusPage);
