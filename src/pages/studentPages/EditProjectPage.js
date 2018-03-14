import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, H2ResAuto, FormWrapper } from 'theme/Components';
// Components
import ProjectForm from './../../components/StudentDashboard/ProjectForm';

// Actions
import {
  startEditProject,
  startRemoveProject,
} from './../../actions/studentSecondary';

const EditAccomplishment = ({
  editProject,
  removeProject,
  history,
  project,
}) => (
  <Page>
    <Container>
      <FormWrapper>
        <H2ResAuto>Edit Accomplishment</H2ResAuto>
        {project ? (
          <ProjectForm
            onSubmit={editProject}
            removeProject={removeProject}
            history={history}
            edit
            {...project}
          />
        ) : (
          <p>Loading...</p>
        )}
      </FormWrapper>
    </Container>
  </Page>
);

const mapStateToProps = (state, props) => ({
  project: state.studentSecondary.projects.find(
    (project) => project._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editProject: (val) => dispatch(startEditProject(val)),
  removeProject: (_id) => dispatch(startRemoveProject(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAccomplishment);
