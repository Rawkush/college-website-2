import React from 'react';
import { connect } from 'react-redux';

// Components
import ProjectForm from './../../components/StudentDashboard/ProjectForm';

// Actions
import { startAddProject } from './../../actions/studentSecondary';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddAccomplishment = ({ addProject, history }) => (
  <Page>
    <h2>Add Project</h2>
    <ProjectForm onSubmit={addProject} history={history} />
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addProject: (val) => dispatch(startAddProject(val)),
});

export default connect(undefined, mapDispatchToProps)(AddAccomplishment);
