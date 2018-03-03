import React from 'react';
import { connect } from 'react-redux';

// Components
import ProjectForm from './../../components/StudentDashboard/ProjectForm';

// Actions
import { startAddProject } from './../../actions/studentSecondary';

// eslint-disable-next-line
import { Page, Container, H3, FormWrapper } from 'theme/Components';

const AddAccomplishment = ({ addProject, history }) => (
  <Page>
    <Container>
      <FormWrapper>
        <H3>Add Project</H3>
        <ProjectForm onSubmit={addProject} history={history} />
      </FormWrapper>
    </Container>
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addProject: (val) => dispatch(startAddProject(val)),
});

export default connect(undefined, mapDispatchToProps)(AddAccomplishment);
