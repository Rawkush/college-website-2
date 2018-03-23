import React from 'react';
import media from 'theme/media';
import { FlexCenter } from 'theme/Components';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  StyledLink,
} from './../Shared.styles';

//  SVG Icons
import ITIcon from './Icons/IT';
import CivilIcon from './Icons/Civil';
import EnvIcon from './Icons/Environment';
import AlliedIcon from './Icons/Allied';
import AppliedIcon from './Icons/Applied';

const NavItemFlexResponsive = NavItemFlex.extend`
  display: flex;
  &:hover {
    > svg {
      transform: scale(1.1);
      transform: translateY(-3px);
      box-shadow: 4px 3px 9px rgba(0, 0, 0, 0.2);
    }
  }
  ${media.phone`
    text-align: left;
    padding-left: 50px;
  `};

  padding: 4px;
`;

const NavFlexCenter = FlexCenter.extend`
  justify-content: left;
  padding-left: 25px;
`;

export default ({ click }) => (
  <NavCardFlex>
    <NavItemFlexHeading>Departments</NavItemFlexHeading>
    <StyledLink to="/department/it" onClick={click}>
      <NavItemFlexResponsive>
        <ITIcon />
        <NavFlexCenter>Information Techonology</NavFlexCenter>
      </NavItemFlexResponsive>
    </StyledLink>
    <StyledLink to="/department/civil" onClick={click}>
      <NavItemFlexResponsive>
        <CivilIcon />
        <NavFlexCenter>Civil Engineering</NavFlexCenter>
      </NavItemFlexResponsive>
    </StyledLink>
    <StyledLink to="/department/env" onClick={click}>
      <NavItemFlexResponsive>
        <EnvIcon />
        <NavFlexCenter>Environment</NavFlexCenter>
      </NavItemFlexResponsive>
    </StyledLink>
    <StyledLink to="/department/allied" onClick={click}>
      <NavItemFlexResponsive>
        <AlliedIcon />
        <NavFlexCenter>Allied</NavFlexCenter>
      </NavItemFlexResponsive>
    </StyledLink>
    <StyledLink to="/department/apploed" onClick={click}>
      <NavItemFlexResponsive>
        <AppliedIcon />
        <NavFlexCenter>Applied Science and Humanities</NavFlexCenter>
      </NavItemFlexResponsive>
    </StyledLink>
  </NavCardFlex>
);
