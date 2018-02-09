import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import LoginModal from './../login/LoginModal';

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
      <header>
        <h1>CBPGEC</h1>
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
        <NavLink to="/teacher/register" activeClassName="is-active" exact> Sign Up </NavLink>
        <button onClick={this.onLoginClick}>Sign Up</button>
        <LoginModal
          loginModal={this.state.loginModal}
          closeLoginModal={this.closeLoginModal}
        />
      </header>
    );
  }
}

export default Header;
