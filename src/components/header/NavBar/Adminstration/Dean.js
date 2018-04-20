import React from 'react';
import styled from 'styled-components';
import { red } from 'theme/variable';


//  Images


import {
  NavCardFlex,
  FlexHorizontal,
  NavItemFlexHeading,
  StyledLink,
} from './../Shared.styles';



const FlexHorizontalLong = FlexHorizontal.extend`
  flex: 4;
`;

const Span = styled.div`
  padding: 10px 0px;
  font-weight: 400;
`;

const HoverDiv = styled.div`
  transition: all 0.2s ease-in;
  &:hover {
    color: ${red};
    > svg {
      transform: scale(1.05);
      transform: translateY(-3px);
      box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default ({ click }) => (
  <NavCardFlex>
    <FlexHorizontalLong>
      <NavItemFlexHeading>
        <StyledLink to="/dean" onClick={click}>
          <HoverDiv>
            <Span> dean</Span>
          </HoverDiv>
        </StyledLink>
      </NavItemFlexHeading>
    </FlexHorizontalLong>
  </NavCardFlex>
);
