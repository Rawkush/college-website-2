import React from 'react';
import { connect } from 'react-redux';

// component
import CommitteeForm from './../../components/TeacherDashBoard/CommitteeForm';

// action
import {
  startEditCommittee,
  startRemoveCommittee,
} from './../../actions/teacherSecondary';

const EditCommitte = ({
  editCommittee,
  removeCommittee,
  history,
  committee,
}) => (
  <div>
    <h2> Edit Committe </h2>
    {committee ? (
      <CommitteeForm
        onSubmit={editCommittee}
        remove={removeCommittee}
        history={history}
        edit
        {...committee}
      />
    ) : (
      <p> editing committe </p>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  committee: state.teacherSecondary.committee.find(
    (elem) => elem._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editCommittee: (val) => dispatch(startEditCommittee(val)),
  removeCommittee: (_id) => dispatch(startRemoveCommittee(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCommitte);
