import React from 'react';
import styled from 'styled-components';

// import  from './TpoTabelItem';
import { Teacher, Top, Cod } from './TpoTabelItem';

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

const Tops = ({ topInfo }) => (
  <div>{topInfo.map((item) => ( <Top key={item.name} {...item} />))}</div>
);

const Teachers = ({ teacherInfo }) => (
  <StyledTable>
    <tbody>
      <tr>
        <TH>Name & Designation</TH>
        <TH>Status in the committee</TH>
      </tr>
    </tbody>
    <tbody>
      {teacherInfo.map((item) => ( <Teacher key={item.name} {...item} />))}
    </tbody>
  </StyledTable>
);

const Codinaters = ({ codinaterInfo }) => (
  <StyledTable>
    <tbody>
      <tr>
        <TH>Name</TH>
        <TH>Semester/Year</TH>
      </tr>
    </tbody>
    <tbody>
      {codinaterInfo.map((item) => (<Cod key={item.name} {...item} />))}
    </tbody>
  </StyledTable>
);

module.exports = {
  Teachers,
  Tops,
  Codinaters,
};
