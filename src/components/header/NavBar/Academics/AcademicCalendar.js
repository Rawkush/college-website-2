import React from 'react';
import { Link } from 'react-router-dom';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
} from './../Shared.styles';

export default () => (
  <NavCardFlex>
    <NavItemFlexHeading>Academic Calendar</NavItemFlexHeading>
    <NavItemFlex center>
      <Link to="/somestaticthing">Download</Link>
    </NavItemFlex>
  </NavCardFlex>
);
