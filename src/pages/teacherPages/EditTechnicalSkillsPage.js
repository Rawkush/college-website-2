import React from 'react';
import { connect } from 'react-redux';

// components
import TechnicalSkillsForm from './../../components/TeacherDashBoard/TechnicalSkillsForm';

// actions
import {
  startEditTechnicalSkill,
  startRemoveTechnicalSkill,
} from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const EditTechnicalSkill = ({
  editTechnicalSkill,
  removeTechnicalSkill,
  history,
  technicalSkill,
}) => (
  <Page>
    <h2> Edit TechnicalSkill </h2>
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
