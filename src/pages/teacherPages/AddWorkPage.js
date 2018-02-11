import React from 'react';
import { connect } from 'react-redux';

// Components
import WorkForm from './../../components/TeacherDashboard/WorkForm';

// Actions
import { startAddWork } from './../../actions/teacherSecondary';

const AddWork = ({ addWork, history }) => (
  <div>
    <h2>Add Work</h2>
    <WorkForm onSubmit={addWork} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addWork: (val) => dispatch(startAddWork(val)),
});

export default connect(undefined, mapDispatchToProps)(AddWork);
