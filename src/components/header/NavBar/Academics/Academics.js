import React from 'react';

import DepartmentsCard from './Departments';
import { Flex, Container } from './../../../../theme/Components';

export default () => (
  <Container>
    <Flex>
      <DepartmentsCard />
      <DepartmentsCard />
      <DepartmentsCard />
      <DepartmentsCard />
    </Flex>
  </Container>
);
