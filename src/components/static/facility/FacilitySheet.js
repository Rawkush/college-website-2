import React from 'react';
import styled from 'styled-components';
import { Upperlines, Lowerlines } from './facilityLines';

const DivUL = styled.div`
  padding: 6px;
`;

const Upper = ({ upperInfo }) => (
  <DivUL>
    {upperInfo.map((item) =>(<Upperlines key={item.post} {...item} /> )) } 
  </DivUL>
);

const Lower = ({lowerInfo}) => (
    <DivUL>
     {
         lowerInfo.map((item) =>(
             <Lowerlines  key = {item.departName}   {...item} />
         ))
     }
        </DivUL>
);


module.exports = {
    Upper,
    Lower
};
