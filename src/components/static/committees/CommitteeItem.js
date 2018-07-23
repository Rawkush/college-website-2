import React from 'react';
import { Container, Wrapper } from 'theme/Components';
import styled from 'styled-components';
import Table from './CommitteesTabel';

const CName = styled.p`
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding: 10px;
  font-weight: 600;
`;

export default ({ name = '', data = [] } = {}) => (
  <Container>
    <Wrapper>
      <CName>{name}</CName>
      <Table data={data} />
    </Wrapper>
  </Container>
);
