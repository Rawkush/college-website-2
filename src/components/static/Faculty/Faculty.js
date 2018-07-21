import React from 'react';
import { H2ResAuto, Container, Wrapper } from 'theme/Components';
import { Upper, Lower } from './FacultySheet';
import { upper, lower } from './FacultyData.json';

const UpperData = () => (
  <Container>
    <H2ResAuto>Faculty</H2ResAuto>
    <Wrapper>
      <Upper upperInfo={upper} />
    </Wrapper>
  </Container>
);

const LowerData = () => (
  <Container>
    <Wrapper>
      <Lower lowerInfo={lower} />
    </Wrapper>
  </Container>
);

export { UpperData, LowerData };
