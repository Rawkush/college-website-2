import React, { Component } from 'react';
import axios from 'axios';
import { Wrapper } from 'theme/Components';
import RegisterEmailForm from './RegisterEmailForm';

class RegisterEmail extends Component {
  state = { error: false, success: false };

  submitHandler = (email) => {
    console.log(email);
    this.setState(() => ({ error: false }));
    axios
      .post('/s/registeremail', { email })
      .then(() => {
        this.setState(() => ({
          success:
            'An registertion pin has been sent to your email. Go Ahead and login using your choice of service provider and paste that pin in furter processes.',
        }));
        return Promise.resolve();
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject();
      });
  };

  render() {
    return (
      <Wrapper padding="20px 0px">
        {this.state.error && <p>Oops! Something wrong happened.</p>}
        {this.state.success && <p>{this.state.success}</p>}
        <RegisterEmailForm onSubmit={this.submitHandler} />
      </Wrapper>
    );
  }
}

export default RegisterEmail;
