import React from  'react';
import RtiItem from './RtiItem'
import styled from 'styled-components';

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

export default ({info}) =>(
<StyledTable>
   <tbody>
       <tr>
       <TH> Name </TH>
       <TH> Information Officer  </TH>
           </tr>
       </tbody>
       <tbody>
           {
               info.map((item)=>(
                   <RtiItem  key={item.name} {...item} />
               ))
           }
           </tbody>
    </StyledTable>
);