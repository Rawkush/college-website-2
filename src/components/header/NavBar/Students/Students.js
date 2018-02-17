import React from 'react';

import CirriculumCard from './Curriculum';
import EventsCard from './Events';
import ScholarshipCard from './Scholarship';
import OthersCard from './Others';

// Styled Components
import { Flex, Container } from './../../../../theme/Components';

export default () => (
  <Container>
    <Flex>
      <CirriculumCard />
      <EventsCard />
      <ScholarshipCard />
      <OthersCard />
    </Flex>
  </Container>
);
