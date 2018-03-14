import React from 'react';
import { connect } from 'react-redux';

// Styled-Components
import {
  Page,
  FlexCenter,
  FormWrapper,
  FlexItem,
  FlexResponsiveStack,
  Container,
  H3,
  Wrapper,
} from './../../theme/Components';

import {
  startLoginTeacher,
  startSetTeacher,
} from './../../actions/teacherPrimary';
import { startSetTeacherSecondary } from './../../actions/teacherSecondary';

import TeacherLoginForm from './../../components/adminDashboard/TeacherRegistrationForm';
import LoginButtonLinks from './../../components/login/LoginButtonLinks';
import GoogleSVG from './../../components/login/GoogleButtonSVG';
import GithubSVG from './../../components/login/GithubSVG';
import LinkedInSVG from './../../components/login/LinkedInSVG';

const FlexExtended = FlexResponsiveStack.extend`
  min-height: 65vh;
  align-items: center;
`;

const LoginPage = ({ login, setProfile, setSecondary, history }) => (
  <Page p="10px">
    <Container>
      <FlexExtended>
        <FlexItem>
          <FlexCenter>
            <Wrapper>
              <H3 center>Student&apos;s Login or Register.</H3>
              <Wrapper w="250px" m="50px auto">
                <LoginButtonLinks
                  link="/s/student/auth/google"
                  name="Login using Google"
                  SVG={GoogleSVG}
                />
                <br />
                <LoginButtonLinks
                  link="/s/student/auth/github"
                  name="Login using Github"
                  SVG={GithubSVG}
                />
                <br />
                <LoginButtonLinks
                  link="/s/student/auth/linkedin"
                  name="Login using LinkedIn"
                  SVG={LinkedInSVG}
                />
              </Wrapper>
            </Wrapper>
          </FlexCenter>
        </FlexItem>
        <FlexItem>
          <Wrapper>
            <H3 center>Teacher&apos;s Login.</H3>
            <FormWrapper>
              <TeacherLoginForm
                onSubmit={login}
                history={history}
                redirect="/teacher/login"
                setProfile={setProfile}
                setSecondary={setSecondary}
                login
              />
            </FormWrapper>
          </Wrapper>
        </FlexItem>
      </FlexExtended>
    </Container>
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  login: (val) => dispatch(startLoginTeacher(val)),
  setProfile: () => dispatch(startSetTeacher()),
  setSecondary: () => dispatch(startSetTeacherSecondary()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
