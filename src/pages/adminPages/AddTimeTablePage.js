import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startAddTimeTable } from './../../actions/timeTable';

// Component
import TimeTableForm from './../../components/adminDashboard/TimeTableForm';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddSyllabusPage = ({ addTimeTable, history }) => (
  <Page>
    <h2>Add Time Table</h2>
    <TimeTableForm history={history} onSubmit={addTimeTable} />
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addTimeTable: (val) => dispatch(startAddTimeTable(val)),
});

export default connect(undefined, mapDispatchToProps)(AddSyllabusPage);
