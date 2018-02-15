import React from 'react';

import DepartmentsCard from './Departments';
import SyllabusCard from './Syllabus';
import TimeTableCard from './TimeTable';
import AcademicCalendar from './AcademicCalendar';

// Styled Components
import { Flex, Container } from './../../../../theme/Components';

export default () => (
  <Container>
    <Flex>
      <DepartmentsCard />
      <SyllabusCard />
      <TimeTableCard />
      <AcademicCalendar />
    </Flex>
  </Container>
);
