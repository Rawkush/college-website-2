import React from 'react';
import { Container, Wrapper } from 'theme/Components';
import { TabelName } from '../commonStyles';

import Sheet from './LaboratoriesSheet';

export default ({ name = '', data = [] } = {}) => (
  <Container>
    <Wrapper>
      <br />
      <TabelName> {name}</TabelName>
      <Sheet data={data} />
      <br />
    </Wrapper>
  </Container>
);
