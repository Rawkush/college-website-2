import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import media from 'theme/media';

const Wrapper = styled.div`
  position: fixed;
  right: 30px;
  top: 142px;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  background: #424242;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  z-index: 1;
  transition: 0.2s all ease-out;
  ${media.phone`
    height: 50px;
    width: 50px;
    font-size: 13px;
    right: 8px;
    top: 124px;
  `};
  &:hover {
    transform: translateY(-3px);
  }
`;

const Wrapper2 = styled.div`
  position: fixed;
  right: 30px;
  top: 142px;
  padding: 10px;
  border-radius: 50px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  background: #424242;
  color: white;
  cursor: pointer;
  transition: all ease-out;
  transition-duration: ${({ animate }) => `${0.15 * animate}s`};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open, animate }) =>
    open ? `translateY(${30 + 50 * animate}px)` : 'translateY(0)'};
  ${media.phone`
    right: 8px;
    top: 116px;
    font-size: 13px;
    padding: 7px;
    transform: ${({ open, animate }) =>
    open ? `translateY(${15 + 50 * animate}px)` : 'translateY(0)'};
    &:hover {
    transform: ${({ open, animate }) =>
    open ? `translateY(${15 + 50 * animate}px)` : 'translateY(0)'};
    }
  `};
  &:hover {
    transform: ${({ open, animate }) =>
    (open ? `translateY(${30 + 50 * animate}px)` : 'translateY(0)')}
      translateX(-5px);
  }
`;

const SoberLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

class Nav extends Component {
  state = { open: false };

  openHandle = () => {
    if (this.state.open) {
      this.setState(() => ({ open: false }));
    } else {
      this.setState(() => ({ open: true }));
    }
  };

  render() {
    return (
      <div>
        <Wrapper onClick={this.openHandle}>
          {this.state.open ? 'Close' : 'Open'}
        </Wrapper>
        <Wrapper2 animate={1} open={this.state.open}>
          <SoberLink to="#">Faculty</SoberLink>
        </Wrapper2>
        <Wrapper2 animate={2} open={this.state.open}>
          <SoberLink to="#">Laboratory</SoberLink>
        </Wrapper2>
        <Wrapper2 animate={3} open={this.state.open}>
          <SoberLink to="/syllabus/new/it">Syllabus</SoberLink>
        </Wrapper2>
      </div>
    );
  }
}

export default Nav;
