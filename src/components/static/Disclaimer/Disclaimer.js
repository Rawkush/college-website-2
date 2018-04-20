import React from 'react';
import styled from 'styled-components';
import { Container, H2ResAuto, H4 } from 'theme/Components';

//  Info
import info from './info';

const LI = styled.li`
  margin-bottom: 10px;
`;

export default () => (
  <Container>
    <H2ResAuto>Disclaimer</H2ResAuto>
    <ol>{info.map((para) => <LI>{para}</LI>)}</ol>
    <H4>@cbpgec Team Members -</H4>
    <ol>
      <LI>Ms. Seema Rani (Asstt. Programmer).</LI>
      <LI>Ms. Geeta Malik (Asstt. Programmer).</LI>
    </ol>
  </Container>
);
