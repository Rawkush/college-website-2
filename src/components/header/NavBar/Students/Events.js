import React from 'react';
import { Link } from 'react-router-dom';

import {
  NavCardFlex,
  FlexHorizontal,
  NavItemFlexHeading,
} from './../Shared.styles';

export default () => (
  <NavCardFlex>
    <NavItemFlexHeading>Events</NavItemFlexHeading>
    <FlexHorizontal>
      <NavItemFlexHeading>
        <Link to="/events/cultural">Cultural Events</Link>
      </NavItemFlexHeading>
      <NavItemFlexHeading>
        <Link to="/events/sports">Sports Events</Link>
      </NavItemFlexHeading>
    </FlexHorizontal>
  </NavCardFlex>
);
