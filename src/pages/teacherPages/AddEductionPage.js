import React from 'react';
import { connect } from 'react-redux';

// componets
import { Page, H2ResAuto, Container, FormWrapper } from 'theme/Components';
import EducationForm from './../../components/TeacherDashBoard/EductionForm';

// actions
import { startUpdateEducation } from './../../actions/teacherSecondary';

const AddEduction = ({ updateEducation, history, education }) => (
  <Page>
    <Container>
      <H2ResAuto> Add Education </H2ResAuto>
      <FormWrapper>
        <EducationForm
          onSubmit={updateEducation}
          history={history}
          education={education}
        />
      </FormWrapper>
    </Container>
  </Page>
);
const mapStateToProps = (state) => ({
  education: state.teacherSecondary.education,
});

const mapDispatchToProps = (dispatch) => ({
  updateEducation: (val) => dispatch(startUpdateEducation(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEduction);
