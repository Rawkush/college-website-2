import React from 'react';
import { connect } from 'react-redux';

// componets
import EducationForm from './../../components/TeacherDashboard/EductionForm';

// actions
import { startUpdateEduction } from './../../actions/teacherSecondary';

const AddEduction = ({ updateEduction, history, education }) => (
  <div>
    <h2> Add Eduction </h2>
    <EducationForm
      onSubmit={updateEduction}
      history={history}
      education={education}
    />
  </div>
);
const mapStateToProps = (state) => ({
  education: state.teacherSecondary.education,
});

const mapDispatchToProps = (dispatch) => ({
  updateEduction: (val) => dispatch(startUpdateEduction(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEduction);
