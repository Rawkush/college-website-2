import React from 'react';

import DepartmentsCard from './Departments';
import SyllabusCard from './Syllabus';
import TimeTableCard from './TimeTable';
import AcademicCalendar from './AcademicCalendar';

import media from './../../../../theme/media';

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
      <DepartmentsCard />
      <SyllabusCard />
      <TimeTableCard />
      <AcademicCalendar />
    </NavFlex>
  </Container>
);
