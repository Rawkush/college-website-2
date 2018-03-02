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

export default ({ click }) => (
  <Container>
    <NavFlex>
      <CirriculumCard click={click} />
      <VerticalLine />
      <EventsCard click={click} />
      <VerticalLine />
      <ScholarshipCard click={click} />
      <VerticalLine />
      <OthersCard click={click} />
    </NavFlex>
  </Container>
);
