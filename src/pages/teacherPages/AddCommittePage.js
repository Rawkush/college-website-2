import React from 'react';
import { connect } from 'react-redux';

// Components
import CommitteeForm from './../../components/TeacherDashBoard/CommitteeForm';

// actios
import { startAddCommittee } from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page,H2 } from 'theme/Components';

const H3 = H2.extend`
font-size: 1.3;
text-align: center;
padding: 15px;
`;

const AddCommitte = ({ addCommittee, history }) => (
  <Page>
    <H3> Add Committe </H3>
    <CommitteeForm onSubmit={addCommittee} history={history} />
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addCommittee: (val) => dispatch(startAddCommittee(val)),
});

export default connect(undefined, mapDispatchToProps)(AddCommitte);
