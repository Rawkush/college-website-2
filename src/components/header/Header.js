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
        <button onClick={this.onLoginClick}>Login</button>
        <LoginModal
          loginModal={this.state.loginModal}
          closeLoginModal={this.closeLoginModal}
        />
      </header>
    );
  }
}

export default Header;
