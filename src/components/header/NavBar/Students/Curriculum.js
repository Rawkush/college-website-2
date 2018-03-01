import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { NavCardFlex, NavItemFlex, StyledLink } from './../Shared.styles';

import ssImage from 'images/ss.png';
import placementImage from 'images/placements.jpg';
import media from 'theme/media';
import { red } from 'theme/variable';

const Image = styled.img`
  display: block;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  transition: all 0.1s ease;
  ${media.phone`
    height: 70px;
  `};
`;

const Span = styled.div`
  padding: 10px 0px;
  text-align: center;
`;

const HoverDiv = styled.div`
  &:hover {
    color: ${red};
    > img {
      transform: scale(1.05);
    }
  }
`;

export default ({ click }) => (
  <NavCardFlex mTop="16px">
    <NavItemFlex>
      <StyledLink to="/shinigsstars" onClick={click}>
        <HoverDiv>
          <Image src={ssImage} />
          <Span>Shining Stars</Span>
        </HoverDiv>
      </StyledLink>
    </NavItemFlex>
    <NavItemFlex>
      <StyledLink to="/placements" onClick={click}>
        <HoverDiv>
          <Image src={placementImage} />
          <Span>Placements</Span>
        </HoverDiv>
      </StyledLink>
    </NavItemFlex>
  </NavCardFlex>
);
