import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startAddTimeTable } from './../../actions/timeTable';

// Component
import TimeTableForm from './../../components/adminDashboard/TimeTableForm';

const AddSyllabusPage = ({ addTimeTable, history }) => (
  <div>
    <h2>Add Syllabus</h2>
    <TimeTableForm history={history} onSubmit={addTimeTable} />
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  addTimeTable: (val) => dispatch(startAddTimeTable(val)),
});

export default connect(undefined, mapDispatchToProps)(AddSyllabusPage);
