import React, { Component } from 'react';
import axios from 'axios';

// Components
import TeacherRegistrationForm from './../../components/adminDashboard/TeacherRegistrationForm';

// eslint-disable-next-line
import { Page, Container, FormWrapper, H2ResAuto } from 'theme/Components';

class TeacherRegisterPage extends Component {
  addTeacher = ({ email, password }) =>
    axios({
      method: 'post',
      url: '/s/admin/teacherregisteration',
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
        <Container>
          <FormWrapper>
            <H2ResAuto>Register Teacher</H2ResAuto>
            <TeacherRegistrationForm
              onSubmit={this.addTeacher}
              history={this.props.history}
              redirect="/admin/dashboard"
            />
          </FormWrapper>
        </Container>
      </Page>
    );
  }
}

export default TeacherRegisterPage;
