import React from 'react';

import DepartmentsCard, { SyllabusCard } from './Departments';
import { Flex, Container } from './../../../../theme/Components';

export default () => (
  <Container>
    <Flex>
      <DepartmentsCard />
      <SyllabusCard />
      <DepartmentsCard />
      <DepartmentsCard />
    </Flex>
  </Container>
);
