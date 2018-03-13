import React from 'react';
import { connect } from 'react-redux';

// Components
import { Page, Container, FormWrapper, H2ResAuto } from 'theme/Components';
import TechnicalSkillsForm from './../../components/TeacherDashBoard/TechnicalSkillsForm';

// Actions
import { startAddTechnicalSkill } from './../../actions/teacherSecondary';

const AddTechnicalSkill = ({ addSkill, history, technicalSkills }) => (
  <Page>
    <Container>
      <H2ResAuto>Technical Skills </H2ResAuto>
      <FormWrapper>
        <TechnicalSkillsForm
          onSubmit={addSkill}
          history={history}
          technicalSkills={technicalSkills}
        />
      </FormWrapper>
    </Container>
  </Page>
);

const mapStateToProps = (state) => ({
  technicalSkills: state.teacherSecondary.technicalSkills,
});

const mapDispatchToProps = (dispatch) => ({
  addSkill: (val) => dispatch(startAddTechnicalSkill(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTechnicalSkill);
