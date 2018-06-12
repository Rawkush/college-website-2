import React from 'react';
import { Container, Wrapper } from 'theme/Components';

import Tabel from './AcademicsTabel';
import { TabelName } from '../commonStyles';

export default ({ name = '', data = [] } = {}) => (
  <Container>
    <Wrapper>
      <br />
      <TabelName> {name}</TabelName>
      <Tabel data={data} />
    </Wrapper>
  </Container>
);
