import React from 'react';
import { connect } from 'react-redux';

// Components
import TechnicalSkillsForm from './../../components/TeacherDashboard/TechnicalSkillsForm';

// Actions
import { startAddTechnicalSkill } from './../../actions/teacherSecondary';

const AddTechnicalSkill = ({ addSkill, history }) => (
  <div>
    <h2>Add TechnicalSkills </h2>
    <TechnicalSkillsForm onSubmit={addSkill} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addSkill: (val) => dispatch(startAddTechnicalSkill(val)),
});

export default connect(undefined, mapDispatchToProps)(AddTechnicalSkill);
