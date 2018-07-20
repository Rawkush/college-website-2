import React from 'react';
import styled from 'styled-components';

import TableItem from './TpoTabelItem';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TH = styled.th`
  font-family: 'Open Sans', sans-serif;
  border-bottom: 1px solid #ddd;
  background: #f3f3f3;
  padding: 15px 5px;
  text-align: left;
  font-size: 13px;
`;

export default ({ data = [] } = {}) => (
  <StyledTable>
    <tbody>
      <tr>
        <TH>Name & Designation </TH>
        <TH> Status in the committee</TH>
      </tr>
    </tbody>
    <tbody>{data.map((item) => <TableItem key={item.name} {...item} />)}</tbody>
  </StyledTable>
);
