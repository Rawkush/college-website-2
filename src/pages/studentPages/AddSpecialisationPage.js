import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, H3, FormWrapper } from 'theme/Components';

// Components
import SpecialisationForm from './../../components/StudentDashboard/SpecialisationsForm';

// Actions
import { startUpdateSpecialisation } from './../../actions/studentSecondary';

const AddSpecialisation = ({
  updateSpecialisation,
  history,
  specialisation,
}) => (
  <Page>
    <Container>
      <FormWrapper>
        <H3>Add Specialisation</H3>
        <SpecialisationForm
          onSubmit={updateSpecialisation}
          history={history}
          specialisation={specialisation}
        />
      </FormWrapper>
    </Container>
  </Page>
);

const mapStateToProps = (state) => ({
  specialisation: state.studentSecondary.specialisation,
});

const mapDispatchToProps = (dispatch) => ({
  updateSpecialisation: (val) => dispatch(startUpdateSpecialisation(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSpecialisation);
