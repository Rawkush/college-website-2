import React from 'react';
import { connect } from 'react-redux';

// component
import CommitteForm from './../../components/TeacherDashboard/CommitteForm';

// action
import {
  startEditCommitte,
  startRemoveCommitte,
} from './../../actions/teacherSecondary';

const EditCommitte = ({ editCommitte, removeCommitte, history, committe }) => (
  <div>
    <h2> Edit Committe </h2>
    {committe ? (
      <CommitteForm
        onSubmit={editCommitte}
        removeTechnicalSkill={removeCommitte}
        history={history}
        edit
        {...committe}
      />
    ) : (
      <p> editing committe </p>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  committe: state.teacherSecondary.committe.find(
    (committe) => committe._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editCommitte: (val) => dispatch(startEditCommitte(val)),
  removeCommitte: (_id) => dispatch(startRemoveCommitte(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCommitte);
