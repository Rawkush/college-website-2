import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Page, Container } from 'theme/Components';

// Actions
import {
  startStudentLogin,
  startSetStudent,
} from './../../actions/studentPrimary';
import { startSetStudentSecondary } from './../../actions/studentSecondary';

const Loading = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 50px;
  color: rgba(0, 0, 0, 0.7);
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: this.props.login,
      setProfile: this.props.setProfile,
      setSecondary: this.props.setSecondary,
      data: null,
      error: null,
    };
  }

  componentWillMount() {
    const token = this.getCookieValue('token');
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    if (token) {
      this.state
        .login(token)
        .then(() => this.state.setProfile())
        .then(() => this.state.setSecondary())
        .then(() => this.setState(() => ({ data: true })))
        .catch(() => this.setState(() => ({ error: true })));
    } else {
      this.setState(() => ({ error: true }));
    }
  }

  getCookieValue = (cname) => {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      // eslint-disable-next-line
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      // eslint-disable-next-line
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  render() {
    if (this.state.data) {
      return <Redirect to="/student/myprofile" />;
    }
    if (this.state.error) {
      return <Redirect to="/" />;
    }
    return (
      <Page>
        <Container>
          <Loading>Please Wait...</Loading>
        </Container>
      </Page>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (token) => dispatch(startStudentLogin(token)),
  setProfile: () => dispatch(startSetStudent()),
  setSecondary: () => dispatch(startSetStudentSecondary()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
