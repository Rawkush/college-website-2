import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, FormWrapper, H2ResAuto } from 'theme/Components';

// Actions
import { startAddSyllabus } from './../../actions/syllabus';

// Component
import SyllabusForm from './../../components/adminDashboard/SyllabusForm';

const AddSyllabusPage = ({ addNotification, history }) => (
  <Page>
    <Container>
      <FormWrapper>
        <H2ResAuto>Add Syllabus</H2ResAuto>
        <SyllabusForm history={history} onSubmit={addNotification} />
      </FormWrapper>
    </Container>
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addNotification: (val) => dispatch(startAddSyllabus(val)),
});

export default connect(undefined, mapDispatchToProps)(AddSyllabusPage);
