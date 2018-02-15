import React from 'react';
import { Link } from 'react-router-dom';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
} from './../Shared.styles';

export default () => (
  <NavCardFlex>
    <NavItemFlexHeading>Time Table</NavItemFlexHeading>
    <NavItemFlex center>
      <Link to="/timetable/odd">Odd</Link>
    </NavItemFlex>
    <NavItemFlex center>
      <Link to="/timetable/even">Even</Link>
    </NavItemFlex>
  </NavCardFlex>
);
