import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, FormWrapper, H2ResAuto } from 'theme/Components';

// components
import TechnicalSkillsForm from './../../components/TeacherDashBoard/TechnicalSkillsForm';

// actions
import {
  startEditTechnicalSkill,
  startRemoveTechnicalSkill,
} from './../../actions/teacherSecondary';

const EditTechnicalSkill = ({
  editTechnicalSkill,
  removeTechnicalSkill,
  history,
  technicalSkill,
}) => (
  <Page>
    <Container>
      <H2ResAuto> Edit TechcalSkills </H2ResAuto>
      <FormWrapper>
        {technicalSkill ? (
          <TechnicalSkillsForm
            onSubmit={editTechnicalSkill}
            removeTechnicalSkill={removeTechnicalSkill}
            history={history}
            edit
            {...technicalSkill}
          />
        ) : (
          <p> edit tech </p>
        )}
      </FormWrapper>
    </Container>
  </Page>
);

const mapStateToProps = (state, props) => ({
  technicalSkill: state.teacherSecondary.works.find(
    (technicalSkill) => technicalSkill._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editTechnicalSkill: (val) => dispatch(startEditTechnicalSkill(val)),
  removeTechnicalSkill: (_id) => dispatch(startRemoveTechnicalSkill(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTechnicalSkill);
