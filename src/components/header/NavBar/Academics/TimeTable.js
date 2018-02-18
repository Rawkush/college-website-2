import React from 'react';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  StyledLink,
} from './../Shared.styles';

export default () => (
  <NavCardFlex>
    <NavItemFlexHeading>Time Table</NavItemFlexHeading>
    <NavItemFlex center>
      <StyledLink to="/timetable/odd">Odd</StyledLink>
    </NavItemFlex>
    <NavItemFlex center>
      <StyledLink to="/timetable/even">Even</StyledLink>
    </NavItemFlex>
  </NavCardFlex>
);
