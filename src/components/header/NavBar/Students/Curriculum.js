import React from 'react';
import { Link } from 'react-router-dom';

import { NavCardFlex, NavItemFlex } from './../Shared.styles';

export default () => (
  <NavCardFlex>
    <NavItemFlex>
      <Link to="/shinigsstars">Shining Stars</Link>
    </NavItemFlex>
    <NavItemFlex>
      <Link to="/placements">Placements</Link>
    </NavItemFlex>
  </NavCardFlex>
);
