import React from 'react';
import { connect } from 'react-redux';

// Components
import SpecialisationForm from './../../components/StudentDashboard/SpecialisationsForm';

// Actions
import { startUpdateSpecialisation } from './../../actions/studentSecondary';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddSpecialisation = ({
  updateSpecialisation,
  history,
  specialisation,
}) => (
  <Page>
    <h2>Add Specialisation</h2>
    <SpecialisationForm
      onSubmit={updateSpecialisation}
      history={history}
      specialisation={specialisation}
    />
  </Page>
);

const mapStateToProps = (state) => ({
  specialisation: state.studentSecondary.specialisation,
});

const mapDispatchToProps = (dispatch) => ({
  updateSpecialisation: (val) => dispatch(startUpdateSpecialisation(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSpecialisation);
