import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

// Component
import FormikStudentRegistrationForm from './../../components/registration/studentRegistrationForm';

// Actions
import {
  studentlogin,
  startAddStudent,
  startSetStudent,
} from './../../actions/studentPrimary';

import { startSetStudentSecondary } from './../../actions/studentSecondary';

// eslint-disable-next-line
import { Page, Container, H2ResAuto } from 'theme/Components';

//  Styled Components
const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const StudentRegistrationPage = ({
  addStudent,
  history,
  login,
  setPrimary,
  setSecondary,
}) => {
  function getCookieValue(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      // eslint-disable-next-line
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      // eslint-disable-next-line
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  const token = getCookieValue('token');
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  const data = jwt.decode(token);
  console.log(data);
  return token ? (
    <Page>
      <Container>
        <Wrapper>
          <H2ResAuto>Student Registration </H2ResAuto>
          <FormikStudentRegistrationForm
            {...data.userData}
            token={data.token}
            onSubmit={addStudent}
            history={history}
            login={login}
            setPrimary={setPrimary}
            setSecondary={setSecondary}
          />
        </Wrapper>
      </Container>
    </Page>
  ) : (
    <Page>
      <p>Sorry! You cannot proceed.</p>
    </Page>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addStudent: (data) => dispatch(startAddStudent(data)),
  login: () => dispatch(studentlogin()),
  setPrimary: () => dispatch(startSetStudent()),
  setSecondary: () => dispatch(startSetStudentSecondary()),
});

export default connect(undefined, mapDispatchToProps)(StudentRegistrationPage);
