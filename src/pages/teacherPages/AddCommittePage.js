import React from 'react';
import { connect } from 'react-redux';

// Components
import CommitteForm from './../../components/TeacherDashboard/CommitteForm';

// actios
import { startAddCommitte } from './../../actions/teacherSecondary';

const AddCommitte = ({ addCommitte, history }) => (
  <div>
    <h2> Add Committe </h2>
    <CommitteForm onSubmit={addCommitte} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addCommitte: (val) => dispatch(startAddCommitte(val)),
});

export default connect(undefined, mapDispatchToProps)(AddCommitte);
