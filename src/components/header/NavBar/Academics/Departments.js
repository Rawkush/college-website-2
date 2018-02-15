import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, FlexItem } from './../../../../theme/Components';

const NavCardFlex = Flex.extend`
  flex-direction: column;
  flex: 1;
`;

const NavItemFlex = FlexItem.extend`
  padding: 10px 0px;
  font-family: 'Alegreya Sans', sans-serif;
  text-align: left;
`;

const NavItemFlexHeading = FlexItem.extend`
  padding: 15px 0px;
  font-family: 'Alegreya Sans', sans-serif;
`;

const NavItemFlexSubHeading = FlexItem.extend`
  padding: 15px 0px;
  font-family: 'Alegreya Sans', sans-serif;
`;

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

const FlexHorizontal = Flex.extend`
  flex-direction: row;
`;

export const SyllabusCard = () => (
  <NavCardFlex>
    <NavItemFlexHeading>Syllabus</NavItemFlexHeading>
    <NavItemFlexSubHeading>New</NavItemFlexSubHeading>
    <FlexHorizontal>
      <NavItemFlex>
        <Link to="/syllabus/new/it">I.T.</Link>
      </NavItemFlex>
      <NavItemFlex>
        <Link to="/syllabus/new/civil">Civil</Link>
      </NavItemFlex>
      <NavItemFlex>
        <Link to="/syllabus/new/env">Env</Link>
      </NavItemFlex>
    </FlexHorizontal>
    <NavItemFlexSubHeading>Old</NavItemFlexSubHeading>
    <FlexHorizontal>
      <NavItemFlex>
        <Link to="/syllabus/old/it">I.T.</Link>
      </NavItemFlex>
      <NavItemFlex>
        <Link to="/syllabus/old/civil">Civil</Link>
      </NavItemFlex>
      <NavItemFlex>
        <Link to="/syllabus/old/env">Env</Link>
      </NavItemFlex>
    </FlexHorizontal>
  </NavCardFlex>
);
