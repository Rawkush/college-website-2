import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './../../../theme/Components';
import AcademicsNav from './Academics/Academics';
import StudentsNav from './Students/Students';

const NavContainer = styled.div`
  display: flex;
  width: 75%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 10px;
  z-index: 100;
`;

const NavItem = styled.div`
  flex: 1;
  text-align: center;
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  z-index: 100;
  > a {
    text-decoration: none;
    color: ${(props) => (props.red ? '#c14545' : 'rgba(0, 0, 0, 0.68)')};
    &:hover {
      cursor: pointer;
      color: #c14545;
    }
  }
`;

const FixedCover = styled.div`
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.09);
  z-index: 100;
  width: 100%;
  background: #fff;
  @media (min-width: 700px) {
    position: fixed;
    top: 62px;
  }
  @media (max-width: 700px) {
    position: fixed;
    bottom: 0px;
  }
`;

const Div = styled.div`
  min-height: 250px;
  width: 100%;
  position: fixed;
  background: #fff;
  top: ${(props) => (props.active ? '92px' : '-250px')};
  transition: all cubic-bezier(0.46, 0.22, 0.5, 0.93) 0.3s;
  z-index: 90;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.09);
`;

class NavBar extends Component {
  state = {
    active1: false,
    active2: false,
  };

  click1 = () => {
    if (this.state.active1) {
      this.setState(() => ({ active1: false, active2: false }));
    } else {
      this.setState(() => ({ active1: true, active2: false }));
    }
  };

  click2 = () => {
    if (this.state.active2) {
      this.setState(() => ({ active1: false, active2: false }));
    } else {
      this.setState(() => ({ active1: false, active2: true }));
    }
  };

  render() {
    return (
      <div>
        <FixedCover>
          <Container>
            <NavContainer>
              <NavItem>
                <Link to="/">HOME</Link>
              </NavItem>
              <NavItem red={this.state.active1}>
                <a onClick={this.click1}>ACADEMICS</a>
              </NavItem>
              <NavItem red={this.state.active2}>
                <a onClick={this.click2}>STUDENTS</a>
              </NavItem>
              <NavItem>
                <Link to="/about">ABOUT US</Link>
              </NavItem>
            </NavContainer>
          </Container>
        </FixedCover>
        <Div active={this.state.active1}>
          <AcademicsNav />
        </Div>
        <Div active={this.state.active2}>
          <StudentsNav />
        </Div>
      </div>
    );
  }
}

export default NavBar;
