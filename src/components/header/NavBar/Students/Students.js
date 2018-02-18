import React from 'react';

import CirriculumCard from './Curriculum';
import EventsCard from './Events';
import ScholarshipCard from './Scholarship';
import OthersCard from './Others';
import media from './../../../../theme/media';

import { VerticalLine } from './../Shared.styles';

// Styled Components
import { Flex, Container } from './../../../../theme/Components';

const NavFlex = Flex.extend`
  ${media.phone`
    flex-direction: column;
  `};
`;

export default () => (
  <Container>
    <NavFlex>
      <CirriculumCard />
      <VerticalLine />
      <EventsCard />
      <VerticalLine />
      <ScholarshipCard />
      <VerticalLine />
      <OthersCard />
    </NavFlex>
  </Container>
);
