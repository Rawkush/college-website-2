import React from 'react';
import styled from 'styled-components';
// import Lines from './LibraryLines';

const P = styled.p`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  padding: 5px;
`;

export default ({ data = [] } = {}) => (
  <div>{data.map((item) => <P>{item} </P>)}</div>
);
