import React, { Component } from 'react';
import axios from 'axios';

// Components
import TeacherRegistrationForm from './../../components/adminDashboard/TeacherRegistrationForm';

// eslint-disable-next-line
import { Page } from 'theme/Components';

class TeacherRegisterPage extends Component {
  addTeacher = ({ email, password }) =>
    axios({
      method: 'post',
      url: 'http://localhost:3000/s/admin/teacherregisteration',
      data: {
        email,
        password,
        token: localStorage.getItem('adminToken'),
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => Promise.resolve())
      .catch((err) => Promise.reject(err));
  render() {
    return (
      <Page>
        <TeacherRegistrationForm
          onSubmit={this.addTeacher}
          history={this.props.history}
          redirect="/admin/dashboard"
        />
      </Page>
    );
  }
}

export default TeacherRegisterPage;
