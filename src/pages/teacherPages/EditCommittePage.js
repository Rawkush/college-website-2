import React from 'react';
import { connect } from 'react-redux';

// component
import { Page, H2ResAuto, FormWrapper, Container } from 'theme/Components';
import CommitteeForm from './../../components/TeacherDashBoard/CommitteeForm';

// action
import {
  startEditCommittee,
  startRemoveCommittee,
} from './../../actions/teacherSecondary';

const EditCommitte = ({
  editCommittee,
  removeCommittee,
  history,
  committee,
}) => (
  <Page>
    <Container>
      <H2ResAuto> Edit Committee </H2ResAuto>
      <FormWrapper>
        {committee ? (
          <CommitteeForm
            onSubmit={editCommittee}
            remove={removeCommittee}
            history={history}
            edit
            {...committee}
          />
        ) : (
          <p> Loading... </p>
        )}
      </FormWrapper>
    </Container>
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
