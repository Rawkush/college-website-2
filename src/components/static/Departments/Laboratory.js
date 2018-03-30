import React from 'react';
import styled from 'styled-components';
import { Container } from 'theme/Components';

const Background = styled.div`
  background: rgba(164, 191, 254, 0.7);
  padding: 10px;
  margin-bottom: 50px;
`;

const Heading = styled.h2`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 25px;
`;

export default () => (
  <Background>
    <Container>
      <Heading>Laboratory</Heading>
    </Container>
  </Background>
);
