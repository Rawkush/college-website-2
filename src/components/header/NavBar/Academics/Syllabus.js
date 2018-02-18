import React from 'react';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  NavItemFlexSubHeading,
  FlexHorizontal,
  StyledLink,
} from './../Shared.styles';

export default () => (
  <NavCardFlex>
    <NavItemFlexHeading>Syllabus</NavItemFlexHeading>
    <NavItemFlexSubHeading>New</NavItemFlexSubHeading>
    <FlexHorizontal>
      <NavItemFlex center>
        <StyledLink to="/syllabus/new/it">I.T.</StyledLink>
      </NavItemFlex>
      <NavItemFlex center>
        <StyledLink to="/syllabus/new/civil">Civil</StyledLink>
      </NavItemFlex>
      <NavItemFlex center>
        <StyledLink to="/syllabus/new/env">Env</StyledLink>
      </NavItemFlex>
    </FlexHorizontal>
    <NavItemFlexSubHeading>Old</NavItemFlexSubHeading>
    <FlexHorizontal>
      <NavItemFlex center>
        <StyledLink to="/syllabus/old/it">I.T.</StyledLink>
      </NavItemFlex>
      <NavItemFlex center>
        <StyledLink to="/syllabus/old/civil">Civil</StyledLink>
      </NavItemFlex>
      <NavItemFlex center>
        <StyledLink to="/syllabus/old/env">Env</StyledLink>
      </NavItemFlex>
    </FlexHorizontal>
  </NavCardFlex>
);
