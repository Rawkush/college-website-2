import React from 'react';
import styled from 'styled-components';
import { red } from 'theme/variable';

import media from 'theme/media';

//  Images
import culturalImage from 'images/cultural.jpg';
import sportsImage from 'images/sports.jpg';

import {
  NavCardFlex,
  FlexHorizontal,
  NavItemFlexHeading,
  StyledLink,
} from './../Shared.styles';

const Image = styled.img`
  display: block;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  transition: all 0.1s ease;
  ${media.phone`
    height: 80px;
  `};
`;

const FlexHorizontalLong = FlexHorizontal.extend`
  flex: 4;
`;

const Span = styled.div`
  padding: 10px 0px;
  font-weight: 400px;
`;

const HoverDiv = styled.div`
  &:hover {
    color: ${red};
    > img {
      transform: scale(1.05);
      transform: translateY(-3px);
      box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default ({ click }) => (
  <NavCardFlex>
    <NavItemFlexHeading>Events</NavItemFlexHeading>
    <FlexHorizontalLong>
      <NavItemFlexHeading>
        <StyledLink to="/events/cultural" onClick={click}>
          <HoverDiv>
            <Image src={culturalImage} alt="cultural" />
            <Span> Cultural Events </Span>
          </HoverDiv>
        </StyledLink>
      </NavItemFlexHeading>
      <NavItemFlexHeading>
        <StyledLink to="/events/sports" onClick={click}>
          <HoverDiv>
            <Image src={sportsImage} alt="sports" />
            <Span> Sports Events </Span>
          </HoverDiv>
        </StyledLink>
      </NavItemFlexHeading>
    </FlexHorizontalLong>
  </NavCardFlex>
);
