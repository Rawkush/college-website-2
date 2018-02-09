import React, { Component } from 'react';
import axios from 'axios';

// Components
import TeacherRegistrationForm from './../../components/adminDashboard/TeacherRegistrationForm';

class TeacherRegisterPage extends Component {
  addTeacher = ({ email, password }) =>
    axios({
      method: 'post',
      url: 'http://localhost:3000/s/admin/teacherregisteration',
      data: {
        email,
        password,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => Promise.resolve())
      .catch((err) => Promise.reject(err));
  render() {
    return (
      <TeacherRegistrationForm
        onSubmit={this.addTeacher}
        history={this.props.history}
        redirect="/admin/dashboard"
      />
    );
  }
}

export default TeacherRegisterPage;
