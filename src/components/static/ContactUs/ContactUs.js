import React from 'react';
import styled from 'styled-components';
import { Container, H2ResAuto, Wrapper } from 'theme/Components';

const Heading = styled.h4`
  font-family: 'Noto Serif', serif;
  font-size: 23px;
`;

export default () => (
  <Container>
    <Wrapper>
      <H2ResAuto>Contact Us</H2ResAuto>
      <Heading>You can visit us - </Heading>
      <p>Timings - </p> <br />
      <p>9:30 A.M. to 1:00 P.M</p> <br />
      <p>2:00 P.M. To 5:00 P.M.</p> <br />
    </Wrapper>
  </Container>
);
