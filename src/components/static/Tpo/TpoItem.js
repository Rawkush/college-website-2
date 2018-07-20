import React from 'react';
import { Container, Wrapper, H4 } from 'theme/Components';
import styled from 'styled-components';
import Table from './TpoTabel';

const CName = styled.p`
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding: 10px;
  font-weight: 600;
`;
const P = styled.p`
  font-family: 'Noto Serif', serif;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: 'center';
`;


const Item = ({ name = '', data = [] } = {}) => (
  <Container>
    <Wrapper>
      <CName>{name}</CName>
      <Table data={data} />
    </Wrapper>
  </Container>
);

const ItemHead = ({ name = ' ', data = [] } = {}) => (
  <Container>
    <Wrapper>
      <P style={{ textAlign: 'center' }}> {name} </P>
      <H4 style={{ textAlign: 'center' }}>
        {data.map((item) => <p key={item}> {item} </p>)}
      </H4>
    </Wrapper>
  </Container>
);

module.exports = {
  Item,
  ItemHead,
};
