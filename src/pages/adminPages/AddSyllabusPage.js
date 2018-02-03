import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startAddSyllabus } from './../../actions/syllabus';

// Component
import SyllabusForm from './../../components/adminDashboard/SyllabusForm';

const AddSyllabusPage = ({ addNotification, history }) => (
  <div>
    <h2>Add Syllabus</h2>
    <SyllabusForm history={history} onSubmit={addNotification} />
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  addNotification: (val) => dispatch(startAddSyllabus(val)),
});

export default connect(undefined, mapDispatchToProps)(AddSyllabusPage);
