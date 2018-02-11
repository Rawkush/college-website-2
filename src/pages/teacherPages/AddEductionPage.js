import React from 'react';
import { connect } from 'react-redux';

// componets
import EducationForm from './../../components/TeacherDashBoard/EductionForm';

// actions
import { startUpdateEducation } from './../../actions/teacherSecondary';

const AddEduction = ({ updateEducation, history, education }) => (
  <div>
    <h2> Add Eduction </h2>
    <EducationForm
      onSubmit={updateEducation}
      history={history}
      education={education}
    />
  </div>
);
const mapStateToProps = (state) => ({
  education: state.teacherSecondary.education,
});

const mapDispatchToProps = (dispatch) => ({
  updateEducation: (val) => dispatch(startUpdateEducation(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEduction);
