import React from 'react';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  NavItemFlexSubHeading,
  FlexHorizontal,
  StyledLink,
} from './../Shared.styles';

export default ({ click }) => (
  <NavCardFlex>
    <NavItemFlexHeading>Syllabus</NavItemFlexHeading>
    <NavItemFlexSubHeading>New</NavItemFlexSubHeading>
    <FlexHorizontal>
      <NavItemFlex center>
        <StyledLink to="/syllabus/new/it" onClick={click}>
          I.T.
        </StyledLink>
      </NavItemFlex>
      <NavItemFlex center>
        <StyledLink to="/syllabus/new/civil" onClick={click}>
          Civil
        </StyledLink>
      </NavItemFlex>
      <NavItemFlex center>
        <StyledLink to="/syllabus/new/env" onClick={click}>
          Env
        </StyledLink>
      </NavItemFlex>
    </FlexHorizontal>
    <NavItemFlexSubHeading>Old</NavItemFlexSubHeading>
    <FlexHorizontal>
      <NavItemFlex center>
        <StyledLink to="/syllabus/old/it" onClick={click}>
          I.T.
        </StyledLink>
      </NavItemFlex>
      <NavItemFlex center>
        <StyledLink to="/syllabus/old/civil" onClick={click}>
          Civil
        </StyledLink>
      </NavItemFlex>
      <NavItemFlex center>
        <StyledLink to="/syllabus/old/env" onClick={click}>
          Env
        </StyledLink>
      </NavItemFlex>
    </FlexHorizontal>
  </NavCardFlex>
);
