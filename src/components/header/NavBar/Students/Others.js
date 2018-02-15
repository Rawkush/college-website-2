import React from 'react';
import { Link } from 'react-router-dom';

import { NavCardFlex, NavItemFlex } from './../Shared.styles';

export default () => (
  <NavCardFlex>
    <NavItemFlex>
      <Link to="/somestaticthing">Students List</Link>
    </NavItemFlex>
    <NavItemFlex>
      <Link to="/someexternallink">SBI Collect</Link>
    </NavItemFlex>
  </NavCardFlex>
);
