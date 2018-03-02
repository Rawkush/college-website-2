import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled default components
import { Container } from 'theme/Components';
import media from 'theme/media';

//  Components
import LoveIconSVG from './LoveIconSVG';

const Background = styled.div`
  background: black;
  padding: 10px 0px;
`;

const P = styled.p`
  text-align: center;
  padding: 5px;
  color: #a9a9a9;
  margin: 0px;
  font-family: 'Alegreya Sans', serif;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  color: #d8d8d8;
  background: none;
  text-decoration: none;
  transition: color 0.02s cubic-bezier(0.4, 0.18, 0.76, 0.34);
  position: relative;
  z-index: 100;
  padding: 1px;
  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background: white;
    z-index: -1;
    transition: height 0.1s;
  }
  &:hover {
    color: black;
    &:after {
      height: 100%;
    }
  }
`;

const Span = styled.span`
  padding: 0px 5px;
`;

export default () => (
  <Background>
    <Container>
      <P>
        Made with <LoveIconSVG /> by CBPGEC students.
        <Span>
          <StyledLink to="/developersteam">
            <em>View developers team.</em>
          </StyledLink>
        </Span>
      </P>
    </Container>
  </Background>
);
