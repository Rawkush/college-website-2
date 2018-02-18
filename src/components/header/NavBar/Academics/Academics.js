import React from 'react';

import DepartmentsCard from './Departments';
import SyllabusCard from './Syllabus';
import TimeTableCard from './TimeTable';
import AcademicCalendar from './AcademicCalendar';

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
      <DepartmentsCard />
      <VerticalLine />
      <SyllabusCard />
      <VerticalLine />
      <TimeTableCard />
      <VerticalLine />
      <AcademicCalendar />
    </NavFlex>
  </Container>
);
