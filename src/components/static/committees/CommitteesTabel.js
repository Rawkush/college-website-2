import React from 'react';
import styled from 'styled-components';

import { ExaminationItem } from './CommitteesItem';

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

const ExaminationBody = ({ info }) => (
  <StyledTable>
    <tbody>
      <tr>
        <TH>Name & Designation </TH>
        <TH> Status in the committee</TH>
      </tr>
    </tbody>
    <tbody>
      {info.map((item, i = 0) => <ExaminationItem key={i++} {...item} />)}
    </tbody>
  </StyledTable>
);

module.exports = {
  ExaminationBody,
};
