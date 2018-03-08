import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Components
import TechnicalSkillsForm from './../../components/TeacherDashBoard/TechnicalSkillsForm';

// Actions
import { startAddTechnicalSkill } from './../../actions/teacherSecondary';

const Title = styled.h4`
  padding: 16px;
  margin: 50px 0px;
  font-size: 20px;
  font-family: 'Noto Serif', serif;
  text-align: center;
  `;
// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddTechnicalSkill = ({ addSkill, history, technicalSkills }) => (
  <Page>
    <Title>Add TechnicalSkills </Title>
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
