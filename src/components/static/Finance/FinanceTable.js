import React from 'react';
import styled from 'styled-components';

//  Components
import FinanceTableItem from './FinanceTableItem';

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

export default ({ info }) => (
  <StyledTable>
    <tbody>
      <tr>
        <TH>S. No.</TH>
        <TH>Title of the Document</TH>
        <TH>File</TH>
      </tr>
    </tbody>
    <tbody>
      {info.map((item, index) => (
        <FinanceTableItem key={item.title} {...item} index={index + 1} />
      ))}
    </tbody>
  </StyledTable>
);
