import React from 'react';
import { connect } from 'react-redux';

// Components
import WorkForm from './../../components/TeacherDashboard/WorkForm';

// actions
import {
  startEditWork,
  startRemoveWork,
} from './../../actions/teacherSecondary';

const EditWork = ({ editWork, removeWork, history, work }) => (
  <div>
    <h2> Edit Work </h2>
    {work ? (
      <WorkForm
        onSubmit={editWork}
        removeWork={removeWork}
        history={history}
        edit
        {...work}
      />
    ) : (
      <p>vbhfdhjvbdhfsbgjbdhfskjgdfngdfgdf</p>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  work: state.teacherSecondary.works.find(
    (work) => work._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editWork: (val) => dispatch(startEditWork(val)),
  removeWork: (_id) => dispatch(startRemoveWork(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWork);
