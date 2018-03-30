import React from 'react';
import styled from 'styled-components';
import SyllabusItemTableItem from './syllabusItemTableItem';

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

const SyllabusItemTable = ({ syllabus, auth }) => (
  <StyledTable>
    <tbody>
      <tr>
        <TH>Code no.</TH>
        <TH>Subject</TH>
        <TH>L</TH>
        <TH>T/P</TH>
        <TH>Credits</TH>
        <TH>Status</TH>
        {auth && <TH>Edit</TH>}
      </tr>
    </tbody>
    <tbody>
      {syllabus.map((item) => (
        <SyllabusItemTableItem key={item._id} {...item} auth={auth} />
      ))}
    </tbody>
  </StyledTable>
);

export default SyllabusItemTable;
