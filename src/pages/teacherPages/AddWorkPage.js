import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Components
import WorkForm from './../../components/TeacherDashBoard/WorkForm';

// Actions
import { startAddWork } from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const Title = styled.h4`
  padding: 16px;
  margin: 50px 0px;
  font-size: 20px;
  font-family: 'Noto Serif', serif;
  text-align: center;
  `;

const AddWork = ({ addWork, history }) => ( 
  <Page>
    <Title>Add Work</Title> 
    <WorkForm onSubmit={addWork} history={history} />
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  addWork: (val) => dispatch(startAddWork(val)),
});

export default connect(undefined, mapDispatchToProps)(AddWork);
