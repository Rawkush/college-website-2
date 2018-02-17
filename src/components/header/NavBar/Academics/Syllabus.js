import React from 'react';
import { Link } from 'react-router-dom';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  NavItemFlexSubHeading,
  FlexHorizontal,
} from './../Shared.styles';

export default () => (
  <NavCardFlex>
    <NavItemFlexHeading>Syllabus</NavItemFlexHeading>
    <NavItemFlexSubHeading>New</NavItemFlexSubHeading>
    <FlexHorizontal>
      <NavItemFlex center>
        <Link to="/syllabus/new/it">I.T.</Link>
      </NavItemFlex>
      <NavItemFlex center>
        <Link to="/syllabus/new/civil">Civil</Link>
      </NavItemFlex>
      <NavItemFlex center>
        <Link to="/syllabus/new/env">Env</Link>
      </NavItemFlex>
    </FlexHorizontal>
    <NavItemFlexSubHeading>Old</NavItemFlexSubHeading>
    <FlexHorizontal>
      <NavItemFlex center>
        <Link to="/syllabus/old/it">I.T.</Link>
      </NavItemFlex>
      <NavItemFlex center>
        <Link to="/syllabus/old/civil">Civil</Link>
      </NavItemFlex>
      <NavItemFlex center>
        <Link to="/syllabus/old/env">Env</Link>
      </NavItemFlex>
    </FlexHorizontal>
  </NavCardFlex>
);
