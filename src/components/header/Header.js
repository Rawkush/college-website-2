import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../theme/media';

import NavBar from './NavBar/NavBar';

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
  flex-grow: 1;
  ${media.phone`
    font-size: 5vw;
  `};
`;

const Header = () => (
  <div>
    <FixedHeader>
      <Container>
        <Flex>
          <FlexCenter>
            <Title>Ch. Bramh Prakash Govt. Engg. College</Title>
          </FlexCenter>
          <FlexCenter>
            <NavLink to="/login">
              <Button>Login</Button>
            </NavLink>
          </FlexCenter>
        </Flex>
      </Container>
    </FixedHeader>
    <NavBar />
  </div>
);

export default Header;
