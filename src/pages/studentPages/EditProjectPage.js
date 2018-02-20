import React from 'react';
import { connect } from 'react-redux';

// Components
import ProjectForm from './../../components/StudentDashboard/ProjectForm';

// Actions
import {
  startEditProject,
  startRemoveProject,
} from './../../actions/studentSecondary';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const EditAccomplishment = ({
  editProject,
  removeProject,
  history,
  project,
}) => (
  <Page>
    <h2>Edit Accomplishment</h2>
    {project ? (
      <ProjectForm
        onSubmit={editProject}
        removeProject={removeProject}
        history={history}
        edit
        {...project}
      />
    ) : (
      <p>L</p>
    )}
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
