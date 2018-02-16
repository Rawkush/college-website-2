import React from 'react';
import { connect } from 'react-redux';

// Styled-Components
import {
  Page,
  FlexCenter,
  FlexItem,
  Container,
  H3,
} from './../../theme/Components';

import {
  startLoginTeacher,
  startSetTeacher,
} from './../../actions/teacherPrimary';
import { startSetTeacherSecondary } from './../../actions/teacherSecondary';

import TeacherLoginForm from './../../components/adminDashboard/TeacherRegistrationForm';

const LoginPage = ({ login, setProfile, setSecondary, history }) => (
  <Page p="10px">
    <Container>
      <FlexCenter h="50vh">
        <FlexItem>
          <H3>Students Login or register using...</H3>
          <br />
          <a href="http://localhost:3000/s/student/auth/google">Google</a>
          <br />
          <a href="http://localhost:3000/s/student/auth/github">GitHub</a>
          <br />
          <a href="http://localhost:3000/s/student/auth/linkedin">LinkedIn</a>
          <br />
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
