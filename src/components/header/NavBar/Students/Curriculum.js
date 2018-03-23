import React from 'react';
import styled from 'styled-components';

import { red } from 'theme/variable';
import StarIcon from './Icons/Star';
import PlacementIcon from './Icons/Placement';

import { NavCardFlex, NavItemFlex, StyledLink } from './../Shared.styles';

const Span = styled.div`
  padding: 10px 0px;
  text-align: center;
`;

const HoverDiv = styled.div`
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${red};
    > svg {
      transform: translateY(-3px);
      box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default ({ click }) => (
  <NavCardFlex mTop="16px">
    <NavItemFlex>
      <StyledLink to="/shinigsstars" onClick={click}>
        <HoverDiv>
          <StarIcon />
          <Span>Shining Stars</Span>
        </HoverDiv>
      </StyledLink>
    </NavItemFlex>
    <NavItemFlex>
      <StyledLink to="/placements" onClick={click}>
        <HoverDiv>
          <PlacementIcon />
          <Span>Placements</Span>
        </HoverDiv>
      </StyledLink>
    </NavItemFlex>
  </NavCardFlex>
);
