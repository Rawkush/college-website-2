import React from 'react';
import { connect } from 'react-redux';

// component
import FormikTeacherRegistrationForm from './../../components/registration/teacherRegistrationForm';

// actions
import {
  startEditTeacher,
  startRemoveTeacher,
} from './../../actions/teacherPrimary';

const TeacherEditProfilePage = ({
  teacher,
  editTeacher,
  deleteTeacher,
  history,
}) => (
  <div>
    <FormikTeacherRegistrationForm
      edit
      {...teacher}
      onSubmit={editTeacher}
      onRemove={deleteTeacher}
      history={history}
    />
  </div>
);

const mapStateToProps = (state) => ({
  teacher: state.primaryTeacher,
});

const mapDispatchToProps = (dispatch) => ({
  editTeacher: (data) => dispatch(startEditTeacher(data)),
  deleteTeacher: () => dispatch(startRemoveTeacher()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  TeacherEditProfilePage
);
