import React from 'react';
import { connect } from 'react-redux';

// Components
import CommitteeForm from './../../components/TeacherDashBoard/CommitteeForm';

// actios
import { startAddCommittee } from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AddCommitte = ({ addCommittee, history }) => (
  <Page>
    <h2> Add Committe </h2>
    <CommitteeForm onSubmit={addCommittee} history={history} />
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addCommittee: (val) => dispatch(startAddCommittee(val)),
});

export default connect(undefined, mapDispatchToProps)(AddCommitte);
