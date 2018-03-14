import React from 'react';
import { connect } from 'react-redux';

// Components
import { Page, Container, H2ResAuto, FormWrapper } from 'theme/Components';
import WorkForm from './../../components/TeacherDashBoard/WorkForm';

// Actions
import { startAddWork } from './../../actions/teacherSecondary';

const AddWork = ({ addWork, history }) => (
  <Page>
    <Container>
      <H2ResAuto>Add Work</H2ResAuto>
      <FormWrapper>
        <WorkForm onSubmit={addWork} history={history} />
      </FormWrapper>
    </Container>
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addWork: (val) => dispatch(startAddWork(val)),
});

export default connect(undefined, mapDispatchToProps)(AddWork);
