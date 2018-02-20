import React, { Component } from 'react';
import axios from 'axios';

//  Components
import TeacherRegistrationForm from './../../components/adminDashboard/TeacherRegistrationForm';

// eslint-disable-next-line
import { Page } from 'theme/Components';

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
      <Page>
        {this.state.registeration ? (
          <p>Your profile will be looked by the admin and then approve!</p>
        ) : (
          <TeacherRegistrationForm
            onSubmit={this.registerTeacher}
            history={this.props.history}
          />
        )}
      </Page>
    );
  }
}

export default TeacherRegistrationPage;
