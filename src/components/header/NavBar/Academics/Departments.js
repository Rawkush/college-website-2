import React from 'react';
import { Link } from 'react-router-dom';
import media from './../../../../theme/media';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
} from './../Shared.styles';

const NavItemFlexResponsive = NavItemFlex.extend`
  ${media.phone`
    text-align: left;
    padding-left: 50px;
  `};
`;

export default () => (
  <NavCardFlex>
    <NavItemFlexHeading>Departments</NavItemFlexHeading>
    <NavItemFlexResponsive>
      <Link to="/department/it">Information Techonology</Link>
    </NavItemFlexResponsive>
    <NavItemFlexResponsive>
      <Link to="/department/civil">Civil</Link>
    </NavItemFlexResponsive>
    <NavItemFlexResponsive>
      <Link to="/department/env">Environment</Link>
    </NavItemFlexResponsive>
    <NavItemFlexResponsive>
      <Link to="/department/allied">Allied</Link>
    </NavItemFlexResponsive>
    <NavItemFlexResponsive>
      <Link to="/department/applied">Applied Science and Humanities</Link>
    </NavItemFlexResponsive>
  </NavCardFlex>
);
