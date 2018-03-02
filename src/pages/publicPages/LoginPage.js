import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

// Styled-Components
import {
  Page,
  FlexCenter,
  FlexItem,
  Container,
  H3,
  A,
} from './../../theme/Components';

import {
  startLoginTeacher,
  startSetTeacher,
} from './../../actions/teacherPrimary';
import { startSetTeacherSecondary } from './../../actions/teacherSecondary';

import TeacherLoginForm from './../../components/adminDashboard/TeacherRegistrationForm';
import LoginButtonLinks from './../../components/login/LoginButtonLinks';

const LoginCard = styled.div`
  background: grey;
  margin: 0 auto;
  width: 300px;
  padding: 40px 10px;
`;

const LinksDiv = styled.div`
  padding: 60px 10px;
`;

const LoginPage = ({ login, setProfile, setSecondary, history }) => (
  <Page p="10px">
    <Container>
      <FlexCenter>
        <FlexItem>
          <LoginCard>
            <H3>Students Login or register using...</H3>
            <LinksDiv>
              <LoginButtonLinks link="/s/student/auth/google" name="Google" />
              <br />
              <LoginButtonLinks link="/s/student/auth/github" name="GitHub" />
              <br />
              <LoginButtonLinks
                link="/s/student/auth/linkedin"
                name="Linked In"
              />
            </LinksDiv>
          </LoginCard>
        </FlexItem>
        <FlexItem>
          <H3>Login As Teacher.</H3>
          <TeacherLoginForm
            onSubmit={login}
            history={history}
            redirect="/teacher/myprofile"
            setProfile={setProfile}
            setSecondary={setSecondary}
            login
          />
        </FlexItem>
      </FlexCenter>
    </Container>
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  login: (val) => dispatch(startLoginTeacher(val)),
  setProfile: () => dispatch(startSetTeacher()),
  setSecondary: () => dispatch(startSetTeacherSecondary()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
