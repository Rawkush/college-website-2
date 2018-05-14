import React from 'react';
import { Container, Wrapper } from 'theme/Components';
import styled from 'styled-components';
import Name from './CommitteeName.json';
import { ExaminationBody } from './CommitteesTabel';

const CName = styled.p`
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding: 10px;
  font-weight: 600;
`;

const Invisible = styled.span`
  opacity: 0;
`;

let i = 0;

export default ({ data }) => (
  <Container>
    <Wrapper>
      <CName>
        {Name[i]}
        <Invisible> {i++} </Invisible>
      </CName>
      <ExaminationBody info={data} />
    </Wrapper>
  </Container>
);
