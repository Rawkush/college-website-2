import React from 'react';
import styled from 'styled-components';
import { H2ResAuto, Container, Wrapper, A } from 'theme/Components';

import {
  tpoHead,
  tpoTeacherCodinater,
  tpoStudentCodinater,
  placementData
} from './TpoData.json';

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

const TeacherData = () => (
  <Container>
    <Wrap>
      <Teachers teacherInfo={tpoTeacherCodinater} />
    </Wrap>
  </Container>
);

const TopData = () => (
  <Container>
    <H2ResAuto> TRAINING AND PLACEMENT CELL </H2ResAuto>
    <Wrap>
      <Tops topInfo={tpoHead} />
    </Wrap>
  </Container>
);

const CodinaterData = () => (
  <Container>
    <P1> Placement Co-ordinator </P1>
    <Wrap>
      <Codinaters codinaterInfo={tpoStudentCodinater} />
    </Wrap>
  </Container>
);

const Placement = () => (
  <Container>
    <P1>
      Mr. Ritesh Kukreja B Tech (IT) Fourth Year is selected in NEC Technology
      India Pvt Ltd. with salary package of 3.25 lac.
    </P1>
    <Wraped>
      {placementData.map((item) => <A href={item.link}> {item.year}</A>)}
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
