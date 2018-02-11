import React from 'react';
import { connect } from 'react-redux';

// Components
import CommitteeForm from './../../components/TeacherDashBoard/CommitteeForm';

// actios
import { startAddCommittee } from './../../actions/teacherSecondary';

const AddCommitte = ({ addCommittee, history }) => (
  <div>
    <h2> Add Committe </h2>
    <CommitteeForm onSubmit={addCommittee} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addCommittee: (val) => dispatch(startAddCommittee(val)),
});

export default connect(undefined, mapDispatchToProps)(AddCommitte);
