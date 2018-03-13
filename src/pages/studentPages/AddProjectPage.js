import React from 'react';
import { connect } from 'react-redux';

// Components
import ProjectForm from './../../components/StudentDashboard/ProjectForm';

// Actions
import { startAddProject } from './../../actions/studentSecondary';

// eslint-disable-next-line
import { Page, Container, H2ResAuto, FormWrapper } from 'theme/Components';

const AddAccomplishment = ({ addProject, history }) => (
  <Page>
    <Container>
      <FormWrapper>
        <H2ResAuto>Add Project</H2ResAuto>
        <ProjectForm onSubmit={addProject} history={history} />
      </FormWrapper>
    </Container>
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addProject: (val) => dispatch(startAddProject(val)),
});

export default connect(undefined, mapDispatchToProps)(AddAccomplishment);
