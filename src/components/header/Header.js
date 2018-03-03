import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { lightBlack } from 'theme/variable';
import media from '../../theme/media';

import NavBar from './NavBar/NavBar';
import LogoSVG from './LogoSVG';

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
  top: 0;
  background: #fff;
  z-index: 100;
  ${media.phone`
    box-shadow: 0px 1px rgba(0, 0, 0, 0.2);
    height: 10vh;
  `};
`;

const Title = H1.extend`
  ${media.phone`
    font-size: 5vw;
  `};
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

const studentToken = localStorage.getItem('studentToken');
const teacherToken = localStorage.getItem('teacherToken');
const adminToken = localStorage.getItem('adminToken');

const getLink = (student, teacher, admin) => {
  if (student) {
    return '/student/myprofile';
  } else if (teacher) {
    return '/teacher/myprofile';
  } else if (admin) {
    return '/admin/dashboard';
  }
  return null;
};

const Header = () => (
  <div>
    <FixedHeader>
      <Container>
        <Flex>
          <FlexCenter>
            <StyledLink to="/">
              <LogoSVG />
              <Title>Ch. Bramh Prakash Govt. Engg. College</Title>
            </StyledLink>
          </FlexCenter>
          <FlexCenter>
            {studentToken || teacherToken || adminToken ? (
              <Link to={getLink(studentToken, teacherToken, adminToken)}>
                My Profile
              </Link>
            ) : (
              <NavLink to="/login">
                <Button>Login</Button>
              </NavLink>
            )}
          </FlexCenter>
        </Flex>
      </Container>
    </FixedHeader>
    <NavBar />
  </div>
);

export default Header;
