import React from 'react';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  StyledLink,
} from './../Shared.styles';

export default ({ click }) => (
  <NavCardFlex>
    <NavItemFlexHeading>Time Table</NavItemFlexHeading>
    <NavItemFlex center>
      <StyledLink to="/timetable/odd" onClick={click}>
        Odd
      </StyledLink>
    </NavItemFlex>
    <NavItemFlex center>
      <StyledLink to="/timetable/even" onClick={click}>
        Even
      </StyledLink>
    </NavItemFlex>
  </NavCardFlex>
);
