import React from 'react';
import { connect } from 'react-redux';

// components
import TechnicalSkillsForm from './../../components/TeacherDashboard/TechnicalSkillsForm';

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
  <div>
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
  </div>
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
