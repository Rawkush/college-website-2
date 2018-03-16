import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { lightBlack } from 'theme/variable';
import media from '../../theme/media';

import NavBar from './NavBar/NavBar';
import LogoSVG from './LogoSVG';
import { MaleAvatar, FemaleAvatar } from './Avatar';

// Importing Styled Components
import {
  H1,
  Container,
  Button,
  Flex,
  FlexCenter,
  Page, // eslint-disable-line
} from './../../theme/Components';

// Styles
const FixedHeader = styled.header`
  position: fixed;
  width: 100%;
  top: -0.6px;
  background: #fff;
  z-index: 100;
  backface-visibility: hidden;
  ${media.phone`
    box-shadow: 0px 1px rgba(0, 0, 0, 0.2);
    height: 70px;
  `};
`;

const ContainerMod = Container.extend`
  ${media.phone`
    height: 100%;
    display: flex;
    align-items: center;
  `};
`;

const Title = H1.extend`
  ${media.phone`
    font-size: 5vw;
  `};
`;

const Image = styled.img`
  height: 45px;
  width: auto;
  border-radius: 50%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }
`;

const StyledLink = styled(Link)`
  color: ${lightBlack};
  text-decoration: none;
  flex-grow: 1;
  ${media.phone`
    font-size: 5vw;
  `};
  display: flex;
  &:hover {
    > svg {
      transform: scale(1.07);
    }
  }
`;

const RoundDiv = styled.div`
  border-radius: 50%;
`;

const DisplayAvatar = ({ SVG }) => (
  <RoundDiv>
    <SVG />
  </RoundDiv>
);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth,
      photo: this.props.photo,
      gender: this.props.gender,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      auth: nextProps.auth,
      photo: nextProps.photo,
      gender: nextProps.gender,
    }));
  }

  giveAuthStatus = (
    { student = false, admin = false, teacher = false } = {},
    { studentPhoto = '', teacherPhoto = '' } = {},
    { studentGender = 'female', teacherGender = 'female' } = {}
  ) => {
    if (student) {
      return {
        link: '/student/myprofile',
        photo: studentPhoto,
        gender:
          studentGender === ('male' || 'other') ? MaleAvatar : FemaleAvatar,
      };
    }
    if (teacher) {
      return {
        link: '/teacher/myprofile',
        photo: teacherPhoto ? `/${teacherPhoto}` : null,
        SVG: teacherGender === ('male' || 'other') ? MaleAvatar : FemaleAvatar,
      };
    }
    if (admin) {
      return { link: '/admin/dashboard', text: 'Dashboard' };
    }
    return null;
  };

  render() {
    const authentication = this.giveAuthStatus(
      this.state.auth,
      this.state.photo,
      this.state.gender
    );
    return (
      <div>
        <FixedHeader>
          <ContainerMod>
            <Flex>
              <FlexCenter>
                <StyledLink to="/">
                  <LogoSVG />
                  <Title>Ch. Bramh Prakash Govt. Engg. College</Title>
                </StyledLink>
              </FlexCenter>
              <FlexCenter>
                {authentication ? (
                  <Link to={authentication.link}>
                    {(authentication.photo && (
                      <Image src={authentication.photo} />
                    )) ||
                      (authentication.SVG && (
                        <DisplayAvatar SVG={authentication.SVG} />
                      )) ||
                      (authentication.text && <p>{authentication.text}</p>)}
                  </Link>
                ) : (
                  <NavLink to="/login">
                    <Button>Login</Button>
                  </NavLink>
                )}
              </FlexCenter>
            </Flex>
          </ContainerMod>
        </FixedHeader>
        <NavBar />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  photo: {
    studentPhoto: state.studentPrimary ? state.studentPrimary.photo : null,
    teacherPhoto: state.studentPrimary ? state.teacherPrimary.photo : null,
  },
  gender: {
    studentGender: state.studentPrimary ? state.studentPrimary.gender : null,
    teacherGender: state.studentPrimary ? state.teacherPrimary.gender : null,
  },
});

export default connect(mapStateToProps)(Header);
