import React from 'react';
import { Container, Wrapper } from 'theme/Components';
import styled from 'styled-components';

import Sheet from './LaboratoriesSheet';

const CName = styled.p`
  font-size: 17px;
  font-weight: 600;
`;
export default ({ name = '', data = [] } = {}) => (
  <Container>
    <Wrapper>
      <br />
      <CName> {name}</CName>
      <Sheet data={data} />
      <br />
    </Wrapper>
  </Container>
);
