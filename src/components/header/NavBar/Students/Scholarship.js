import React from 'react';
import styled from 'styled-components';

import elImage from 'images/el.jpg';
import scholarshipImage from 'images/scholarships.jpg';
import media from 'theme/media';
import { red } from 'theme/variable';

import { NavCardFlex, NavItemFlex, StyledLink } from './../Shared.styles';

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
      transform: scale(1.1);
      transform: translateY(-3px);
      box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default ({ click }) => (
  <NavCardFlex mTop="16px">
    <NavItemFlex>
      <StyledLink to="/scholarships" onClick={click}>
        <HoverDiv>
          <Image src={scholarshipImage} />
          <Span>Scholarships</Span>
        </HoverDiv>
      </StyledLink>
    </NavItemFlex>
    <NavItemFlex>
      <StyledLink to="/educationloan" onClick={click}>
        <HoverDiv>
          <Image src={elImage} />
          <Span>Education Loan</Span>
        </HoverDiv>
      </StyledLink>
    </NavItemFlex>
  </NavCardFlex>
);
