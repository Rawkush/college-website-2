import React from 'react';
import { Link } from 'react-router-dom';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
} from './../Shared.styles';

export default () => (
  <NavCardFlex>
    <NavItemFlexHeading>Departments</NavItemFlexHeading>
    <NavItemFlex>
      <Link to="/department/it">Information Techonology</Link>
    </NavItemFlex>
    <NavItemFlex>
      <Link to="/department/civil">Civil</Link>
    </NavItemFlex>
    <NavItemFlex>
      <Link to="/department/env">Environment</Link>
    </NavItemFlex>
    <NavItemFlex>
      <Link to="/department/allied">Allied</Link>
    </NavItemFlex>
    <NavItemFlex>
      <Link to="/department/applied">Applied Science and Humanities</Link>
    </NavItemFlex>
  </NavCardFlex>
);
