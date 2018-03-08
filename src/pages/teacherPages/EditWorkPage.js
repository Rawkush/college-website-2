import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Components
import WorkForm from './../../components/TeacherDashBoard/WorkForm';

// actions
import {
  startEditWork,
  startRemoveWork,
} from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const Title = styled.h4`
  padding: 16px;
  margin: 50px 0px;
  font-size: 20px;
  font-family: 'Noto Serif', serif;
  text-align: center;
  `;
const EditWork = ({ editWork, removeWork, history, work }) => (
  <Page>
    <Title> Edit Work </Title>
    {work ? (
      <WorkForm 
        onSubmit={editWork}
        remove={removeWork}
        history={history}
        edit
        {...work}
      />
    ) : (
      <p>Loading</p>
    )}
  </Page>
);

const mapStateToProps = (state, props) => ({
  work: state.teacherSecondary.work.find(
    (work) => work._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editWork: (val) => dispatch(startEditWork(val)),
  removeWork: (_id) => dispatch(startRemoveWork(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWork);
