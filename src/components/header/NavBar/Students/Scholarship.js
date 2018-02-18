import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { NavCardFlex, NavItemFlex, StyledLink } from './../Shared.styles';

import elImage from 'images/el.jpg';
import scholarshipImage from 'images/scholarships.jpg';
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
      transform: scale(1.1);
    }
  }
`;

export default () => (
  <NavCardFlex mTop="16px">
    <NavItemFlex>
      <StyledLink to="/scholarships">
        <HoverDiv>
          <Image src={scholarshipImage} />
          <Span>Scholarships</Span>
        </HoverDiv>
      </StyledLink>
    </NavItemFlex>
    <NavItemFlex>
      <StyledLink to="/educationloan">
        <HoverDiv>
          <Image src={elImage} />
          <Span>Education Loan</Span>
        </HoverDiv>
      </StyledLink>
    </NavItemFlex>
  </NavCardFlex>
);
