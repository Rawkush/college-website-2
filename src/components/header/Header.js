import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import LoginModal from './../login/LoginModal';
import NavBar from './NavBar/NavBar';

// Importing Styled Components
import {
  H1,
  Container,
  Button,
  Flex,
  FlexCenter,
  Page,
} from './../../theme/Components';

// Styles

const FixedHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background: #fff;
  z-index: 100;
`;

const Links = () => (
  <div>
    <NavLink to="/" activeClassName="is-active" exact>
      Home
    </NavLink>
    <NavLink to="/syllabus/it" activeClassName="is-active" exact>
      Syllabus - I.T.
    </NavLink>
    <NavLink to="/syllabus/civil" activeClassName="is-active" exact>
      Syllabus - Civil
    </NavLink>
    <NavLink to="/syllabus/environment" activeClassName="is-active" exact>
      Syllabus - Env
    </NavLink>
    <NavLink to="/timetable/even" activeClassName="is-active" exact>
      Time Table - Even
    </NavLink>
    <NavLink to="/timetable/odd" activeClassName="is-active" exact>
      Time Table - Odd
    </NavLink>
    <NavLink to="/events" activeClassName="is-active" exact>
      Events
    </NavLink>
    <NavLink to="/student/myprofile" activeClassName="is-active" exact>
      My Profile
    </NavLink>
    <NavLink to="/teacher/register" activeClassName="is-active" exact>
      Teacher Registeration
    </NavLink>
    <NavLink to="/teacher/login" activeClassName="is-active" exact>
      Teacher Login
    </NavLink>
    <NavLink to="/teacher/addNotification" activeClassName="is-active" exact>
      Add Teacher Notification
    </NavLink>
  </div>
);

class Header extends Component {
  state = {
    loginModal: false,
  };

  onLoginClick = () => {
    this.setState(() => ({ loginModal: true }));
  };

  closeLoginModal = () => {
    this.setState(() => ({ loginModal: false }));
  };

  render() {
    return (
      <div>
        <FixedHeader>
          <Container>
            <Flex>
              <H1>Ch. Bramh Prakash Govt. Engg. College</H1>
              <FlexCenter>
                <Button onClick={this.onLoginClick}>Login</Button>
              </FlexCenter>
            </Flex>
            <LoginModal
              loginModal={this.state.loginModal}
              closeLoginModal={this.closeLoginModal}
            />
          </Container>
        </FixedHeader>
        <NavBar />
        <Page>
          <Links />
        </Page>
      </div>
    );
  }
}

export default Header;
