import React, { Component } from 'react';
import axios from 'axios';

import TeacherRegistrationForm from './../../components/Forms/TeacherRegistrationForm';

class TeacherRegistrationPage extends Component {
  state = {
    registeration: false,
  };
  registerTeacher = (val) => {
    const { name, dateOfBirth, gender, email, password } = val;
    const data = { name, dateOfBirth, gender, email, password };
    return axios({
      method: 'post',
      url: 'http://localhost:3000/s/teacher/register',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        this.setState(() => ({ registeration: true }));
        Promise.resolve();
      })
      .catch((err) => Promise.reject(err));
  };
  render() {
    return (
      <div>
        {this.state.registeration ? (
          <p>Your profile will be looked by the admin and then approve!</p>
        ) : (
          <TeacherRegistrationForm
            onSubmit={this.registerTeacher}
            history={this.props.history}
          />
        )}
      </div>
    );
  }
}

export default TeacherRegistrationPage;
