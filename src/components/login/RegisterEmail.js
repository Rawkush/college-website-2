import React, { Component } from 'react';
import axios from 'axios';
import { Wrapper } from 'theme/Components';
import RegisterEmailForm from './RegisterEmailForm';

class RegisterEmail extends Component {
  state = { success: false };

  submitHandler = ({ email }) =>
    axios
      .post('/s/visitor/verifyemail', { email })
      .then(() => {
        this.setState(() => ({
          success:
            'An registertion pin has been sent to your email. Go Ahead and login using your choice of service provider and paste that pin in furter processes.',
        }));
        return Promise.resolve();
      })
      .catch(({ response }) => Promise.reject(response));

  render() {
    return (
      <Wrapper padding="20px 0px">
        {this.state.success && <p>{this.state.success}</p>}
        <RegisterEmailForm onSubmit={this.submitHandler} />
      </Wrapper>
    );
  }
}

export default RegisterEmail;
