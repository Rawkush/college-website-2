import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Component
import FormikStudentRegistrationForm from './../../components/registration/studentRegistrationForm';

// eslint-disable-next-line
import { Page, Container, H3 } from 'theme/Components';

// Actions
import {
  startEditStudent,
  startRemoveStudent,
} from './../../actions/studentPrimary';

//  Styled Components
const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const StudentEditProfilePage = ({
  student,
  editStudent,
  deleteStudent,
  history,
}) => (
  <Page>
    <Page>
      <Container>
        <Wrapper>
          <H3>Edit Profile</H3>
          <FormikStudentRegistrationForm
            edit
            {...student}
            onSubmit={editStudent}
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
  deleteStudent: () => dispatch(startRemoveStudent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  StudentEditProfilePage
);
