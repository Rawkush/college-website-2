import React from 'react';
import { connect } from 'react-redux';

// Components
import ProjectForm from './../../components/StudentDashboard/ProjectForm';

// Actions
import { startAddProject } from './../../actions/studentSecondary';

const AddAccomplishment = ({ addProject, history }) => (
  <div>
    <h2>Add Project</h2>
    <ProjectForm onSubmit={addProject} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addProject: (val) => dispatch(startAddProject(val)),
});

export default connect(undefined, mapDispatchToProps)(AddAccomplishment);
