import React from 'react';
import { connect } from 'react-redux';

// Component
import { Page, FormWrapper, Container, H2ResAuto } from 'theme/Components';
import TeacherProfileForm from './../../components/Forms/TeacherPrimaryForm';

// Actions
import {
  startEditTeacher,
  startRemoveTeacher,
} from './../../actions/teacherPrimary';

const TeacherEditProfilePage = ({
  teacher,
  editTeacher,
  deleteStudent,
  history,
}) => (
  <Page>
    <Container>
      <H2ResAuto>Edit Profile</H2ResAuto>
      <FormWrapper>
        <TeacherProfileForm
          edit
          {...teacher}
          onSubmit={editTeacher}
          onRemove={deleteStudent}
          history={history}
          redirect="/teacher/myprofile"
        />
      </FormWrapper>
    </Container>
  </Page>
);

const mapStateToProps = (state) => ({
  teacher: state.teacherPrimary,
});

const mapDispatchToProps = (dispatch) => ({
  editTeacher: (data) => dispatch(startEditTeacher(data)),
  deleteTeacher: () => dispatch(startRemoveTeacher()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  TeacherEditProfilePage
);
