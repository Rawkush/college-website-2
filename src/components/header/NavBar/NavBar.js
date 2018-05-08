//  Global Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//  Styled Imports
import { Container } from 'theme/Components';
import media from 'theme/media';

//  Component Imports
import AcademicsNav from './Academics/Academics';
import StudentsNav from './Students/Students';

const NavContainer = styled.div`
  display: flex;
  width: 75%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 10px;
  z-index: 100;
  ${media.phone`
    width: 100%;
    height: 60px;
    padding-bottom: 0px;
  `};
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
  ${media.phone`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
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
    bottom: -0.6px;
  }
  ${media.phone`
    box-shadow: 0px -1px rgba(0,0,0,0.2196078431372549);
    height: 57px;
  `};
`;

const Div = styled.div`
  min-height: 250px;
  width: 100%;
  position: fixed;
  background: #fff;
  transform: ${(props) =>
    props.active ? 'translateY(340px)' : 'translateY(0px)'};
  top: -250px;
  transition: all ease 0.3s;
  z-index: 90;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.09);
  ${media.phone`
    top: 67px;
    transform: ${(props) =>
      props.active ? 'translateY(0px)' : 'translateY(40px)'};
    opacity: ${(props) => (props.active ? '1' : '0')};
    height: calc(100% - 116px);
    overflow-y: auto;
    pointer-events: ${(props) => (props.active ? 'auto' : 'none')};
    width: 101%;
    overflow-x: hidden;
    left: -1px;
  `};
`;

const Wrapper = styled.div`
  backface-visibility: hidden;
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

  navClick = () => {
    this.setState(() => ({ active1: false, active2: false }));
  };

  render() {
    return (
      <Wrapper>
        <FixedCover>
          <Container>
            <NavContainer>
              <NavItem>
                <Link to="/" onClick={this.navClick}>
                  HOME
                </Link>
              </NavItem>
              <NavItem red={this.state.active1}>
                <a onClick={this.click1}>ACADEMICS</a>  {/* eslint-disable-line */}
              </NavItem>
              <NavItem red={this.state.active2}>
                <a onClick={this.click2}>STUDENTS</a>  {/* eslint-disable-line */}
              </NavItem>
              <NavItem>
                <Link to="/about" onClick={this.navClick}>
                  ABOUT US
                </Link>
              </NavItem>
            </NavContainer>
          </Container>
        </FixedCover>
        <Div active={this.state.active1}>
          <AcademicsNav click={this.navClick} />
        </Div>
        <Div active={this.state.active2}>
          <StudentsNav click={this.navClick} />
        </Div>
      </Wrapper>
    );
  }
}

export default NavBar;