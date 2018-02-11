import React from 'react';
import { connect } from 'react-redux';

// Components
import SpecialisationForm from './../../components/TeacherDashboard/SpecialisationForm';

// Actions
import { startUpdateSpecialisation } from './../../actions/teacherSecondary';

const AddSpecialisation = ({
  updateSpecialisation,
  history,
  specialisation,
}) => (
  <div>
    <h2>Add Specialisation</h2>
    <SpecialisationForm
      onSubmit={updateSpecialisation}
      history={history}
      specialisation={specialisation}
    />
  </div>
);

const mapStateToProps = (state) => ({
  specialisation: state.teacherSecondary.specialisation,
});

const mapDispatchToProps = (dispatch) => ({
  updateSpecialisation: (val) => dispatch(startUpdateSpecialisation(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSpecialisation);
