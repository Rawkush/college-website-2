import React from 'react';
import { connect } from 'react-redux';

// Components
import { Page, H2ResAuto, FormWrapper } from 'theme/Components';
import CommitteeForm from './../../components/TeacherDashBoard/CommitteeForm';

// actios
import { startAddCommittee } from './../../actions/teacherSecondary';

const AddCommitte = ({ addCommittee, history }) => (
  <Page>
    <H2ResAuto> Add Committe </H2ResAuto>
    <FormWrapper>
      <CommitteeForm onSubmit={addCommittee} history={history} />
    </FormWrapper>
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addCommittee: (val) => dispatch(startAddCommittee(val)),
});

export default connect(undefined, mapDispatchToProps)(AddCommitte);
