import React from 'react';
import { Container, Wrapper } from 'theme/Components';
import styled from 'styled-components';

import Tabel from './AcademicsTabel';

const CName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export default ({ name = '', data = [] } = {}) => (
  <Container>
    <Wrapper>
      <br />
      <CName> {name}</CName>
      <Tabel data={data} />
    </Wrapper>
  </Container>
);
