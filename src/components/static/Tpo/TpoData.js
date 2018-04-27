import React from 'react';
import styled from 'styled-components';
import { H2ResAuto, Container, Wrapper, A } from 'theme/Components';

import { Teachers, Tops, Codinaters } from './TpoTabel';

const Wrap = Wrapper.extend`
  max-width: 700px;
`;

const Wraped = Wrapper.extend`
  max-width: 700px;
  text-align: center;
`;

const P1 = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  padding: 13px;
`;

const topData = [
  {
    name: 'Dr. Srinivasa K.G ',
    contactNumber: ' 011-25318158',
    email: ' tpo.gecdelhi@gmail.com, tpo@gecdelhi.ac.in',
  },
];

const teacherData = [
  {
    name: 'Dr. Srinivasa K.G , Associate Professor',
    Status: 'Chairperson',
  },
  {
    name: 'Mr. Aneyatullah Niyaji, Asst. Professor',
    Status: 'Convener',
  },
  {
    name: 'Mr. Harjeet Singh Chadha, Asst. Professor',
    Status: 'Member',
  },
  {
    name: 'Mr. Aditya Tandon, Asst. Professor',
    Status: 'Member',
  },
  {
    name: 'Ms. Mimansa Gulati, Asst. Professor',
    Status: 'Member',
  },
  {
    name: 'Dr. Jayati Ghosal, Asst. Professor',
    Status: 'Member',
  },
];

const codinaterData = [
  {
    name: 'Saurabh Mishra',
    year: 'IT, 4th Year ',
  },
  {
    name: 'Roopali Garg',
    year: 'IT, 4th Year',
  },
  {
    name: 'Pankaj Kumar',
    year: 'IT, 4th Year',
  },
  {
    name: 'Jyoti Rani',
    year: 'IT, 4th Year',
  },
  {
    name: 'Vivek Kumar Singh',
    year: 'IT, 4th Year',
  },
];

const placementData = [
  {
    year: 'Placement 2010-11',
    link: '/placement_2010-11',
  },
  {
    year: 'Placement 2011-12',
    link: '/placement_2011_12',
  },
];

const TeacherData = () => (
  <Container>
    <Wrap>
      <Teachers teacherInfo={teacherData} />
    </Wrap>
  </Container>
);

const TopData = () => (
  <Container>
    <H2ResAuto> TRAINING AND PLACEMENT CELL </H2ResAuto>
    <Wrap>
      <Tops topInfo={topData} />
    </Wrap>
  </Container>
);

const CodinaterData = () => (
  <Container>
    <P1> Placement Co-ordinator </P1>
    <Wrap>
      <Codinaters codinaterInfo={codinaterData} />
    </Wrap>
  </Container>
);

const Placement = () => (
  <Container>
    <P1>
      Mr. Ritesh Kukreja B Tech (IT) Fourth Year is selected in NEC Technology India Pvt Ltd. with salary package of 3.25 lac.
    </P1>
    <Wraped>
  {
     placementData.map((item) => (
        <A href={item.link}> {item.year}</A>
         ))
    }
    </Wraped>
    <br />
    <br />
  </Container>
);

module.exports = {
  TeacherData,
  TopData,
  CodinaterData,
  Placement,
};
