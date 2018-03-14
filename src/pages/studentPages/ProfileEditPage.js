import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Page, Container, H2ResAuto } from 'theme/Components';

// Component
import FormikStudentRegistrationForm from './../../components/registration/studentRegistrationForm';

// Actions
import {
  startEditStudent,
  startRemoveStudent,
  studentLogout,
} from './../../actions/studentPrimary';

import { setStudentSecondary } from './../../actions/studentSecondary';

//  Styled Components
const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const StudentEditProfilePage = ({
  student,
  editStudent,
  logout,
  setSecondary,
  deleteStudent,
  history,
}) => (
  <Page>
    <Page>
      <Container>
        <Wrapper>
          <H2ResAuto>Edit Profile</H2ResAuto>
          <FormikStudentRegistrationForm
            edit
            {...student}
            onSubmit={editStudent}
            logout={logout}
            setSecondary={setSecondary}
            onRemove={deleteStudent}
            history={history}
          />
        </Wrapper>
      </Container>
    </Page>
  </Page>
);

const mapStateToProps = (state) => ({
  student: state.studentPrimary,
});

const mapDispatchToProps = (dispatch) => ({
  editStudent: (data) => dispatch(startEditStudent(data)),
  logout: () => dispatch(studentLogout()),
  setSecondary: () => dispatch(setStudentSecondary({})),
  deleteStudent: () => dispatch(startRemoveStudent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  StudentEditProfilePage
);
