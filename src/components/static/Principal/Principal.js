import React from 'react';
import { Container, Wrapper } from 'theme/Components';

import DeanSheet from './PrincipalSheet';
import { dean } from './PrincipleData.json';

const Wrap = Wrapper.extend`
  max-width: 800px;
`;

export default () => (
  <Container>
    <Wrap>{dean.map((item) => <DeanSheet key={item.name} {...item} />)}</Wrap>
  </Container>
);
