import React from 'react';
import { connect } from 'react-redux';

// Components
import WorkForm from './../../components/TeacherDashBoard/WorkForm';

// Actions
import { startAddWork } from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddWork = ({ addWork, history }) => (
  <Page>
    <h2>Add Work</h2>
    <WorkForm onSubmit={addWork} history={history} />
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addWork: (val) => dispatch(startAddWork(val)),
});

export default connect(undefined, mapDispatchToProps)(AddWork);
