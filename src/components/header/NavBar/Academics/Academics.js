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

export default ({ click }) => (
  <Container>
    <NavFlex>
      <DepartmentsCard click={click} />
      <VerticalLine />
      <SyllabusCard click={click} />
      <VerticalLine />
      <TimeTableCard click={click} />
      <VerticalLine />
      <AcademicCalendar click={click} />
    </NavFlex>
  </Container>
);
