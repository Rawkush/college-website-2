import React from 'react';
import { connect } from 'react-redux';

// Components
import SpecialisationForm from './../../components/TeacherDashBoard/SpecialisationForm';

// Actions
import { startUpdateSpecialisation } from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page, H2ResAuto, FormWrapper } from 'theme/Components';

const AddSpecialisation = ({
  updateSpecialisation,
  history,
  specialisation,
}) => (
  <Page>
    <H2ResAuto>Add Specialisation</H2ResAuto>
    <FormWrapper>
      <SpecialisationForm
        onSubmit={updateSpecialisation}
        history={history}
        specialisation={specialisation}
      />
    </FormWrapper>
  </Page>
);

const mapStateToProps = (state) => ({
  specialisation: state.teacherSecondary.specialisation,
});

const mapDispatchToProps = (dispatch) => ({
  updateSpecialisation: (val) => dispatch(startUpdateSpecialisation(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSpecialisation);
