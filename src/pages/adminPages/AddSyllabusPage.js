import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startAddSyllabus } from './../../actions/syllabus';

// Component
import SyllabusForm from './../../components/adminDashboard/SyllabusForm';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddSyllabusPage = ({ addNotification, history }) => (
  <Page>
    <h2>Add Syllabus</h2>
    <SyllabusForm history={history} onSubmit={addNotification} />
  </Page>
);
const mapDispatchToProps = (dispatch) => ({
  addNotification: (val) => dispatch(startAddSyllabus(val)),
});

export default connect(undefined, mapDispatchToProps)(AddSyllabusPage);
