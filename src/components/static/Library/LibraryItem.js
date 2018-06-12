import React from 'react';
import { Container, Wrapper } from 'theme/Components';
import { TabelName } from '../commonStyles';

import Sheet from './LibrarySheet';

const Wrap = Wrapper.extend`
  max-width: 65%;
`;

export default ({ name = '', data = [] } = {}) => (
  <Container>
    <Wrap>
      <TabelName> {name}</TabelName>
      <Sheet data={data} />
    </Wrap>
  </Container>
);
