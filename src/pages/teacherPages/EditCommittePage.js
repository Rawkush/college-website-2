import React from 'react';
import { connect } from 'react-redux';

// component
import CommitteeForm from './../../components/TeacherDashBoard/CommitteeForm';

// action
import {
  startEditCommittee,
  startRemoveCommittee,
} from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page,H2 } from 'theme/Components';

const H3 = H2.extend`
font-size: 1.3;
text-align: center;
padding: 15px;
`;


const EditCommitte = ({
  editCommittee,
  removeCommittee,
  history,
  committee,
}) => (
  <Page>
    <H3> Edit Committe </H3>
    {committee ? (
      <CommitteeForm
        onSubmit={editCommittee}
        remove={removeCommittee}
        history={history}
        edit
        {...committee}
      />
    ) : (
      <p> editing committe </p>
    )}
  </Page>
);

const mapStateToProps = (state, props) => ({
  committee: state.teacherSecondary.committee.find(
    (elem) => elem._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editCommittee: (val) => dispatch(startEditCommittee(val)),
  removeCommittee: (_id) => dispatch(startRemoveCommittee(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCommitte);
