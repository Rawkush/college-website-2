import React from 'react';
import { connect } from 'react-redux';

// Component
import FormikStudentRegistrationForm from './../../components/registration/studentRegistrationForm';

// Actions
import { startEditStudent } from './../../actions/studentPrimary';

const StudentEditProfilePage = ({ student, editStudent, history }) => (
  <div>
    <FormikStudentRegistrationForm
      edit
      {...student}
      onSubmit={editStudent}
      history={history}
    />
  </div>
);

const mapStateToProps = (state) => ({
  student: state.studentPrimary,
});

const mapDispatchToProps = (dispatch) => ({
  editStudent: (data) => dispatch(startEditStudent(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  StudentEditProfilePage
);
