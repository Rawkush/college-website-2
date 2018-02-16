import React from 'react';
import { Link } from 'react-router-dom';

import { NavCardFlex, NavItemFlex } from './../Shared.styles';

export default () => (
  <NavCardFlex>
    <NavItemFlex>
      <Link to="/scholarships">Scholarships</Link>
    </NavItemFlex>
    <NavItemFlex>
      <Link to="/educationloan">Education Loan</Link>
    </NavItemFlex>
  </NavCardFlex>
);
