import React from 'react';
import { connect } from 'react-redux';

// Components
import TechnicalSkillsForm from './../../components/TeacherDashBoard/TechnicalSkillsForm';

// Actions
import { startAddTechnicalSkill } from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddTechnicalSkill = ({ addSkill, history, technicalSkills }) => (
  <Page>
    <h2>Add TechnicalSkills </h2>
    <TechnicalSkillsForm
      onSubmit={addSkill}
      history={history}
      technicalSkills={technicalSkills}
    />
  </Page>
);

const mapStateToProps = (state) => ({
  technicalSkills: state.teacherSecondary.technicalSkills,
});

const mapDispatchToProps = (dispatch) => ({
  addSkill: (val) => dispatch(startAddTechnicalSkill(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTechnicalSkill);
