import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, FormWrapper, H3 } from 'theme/Components';

// Actions
import { startAddSyllabus } from './../../actions/syllabus';

// Component
import SyllabusForm from './../../components/adminDashboard/SyllabusForm';

const AddSyllabusPage = ({ addNotification, history }) => (
  <Page>
    <Container>
      <FormWrapper>
        <H3>Add Syllabus</H3>
        <SyllabusForm history={history} onSubmit={addNotification} />
      </FormWrapper>
    </Container>
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addNotification: (val) => dispatch(startAddSyllabus(val)),
});

export default connect(undefined, mapDispatchToProps)(AddSyllabusPage);
