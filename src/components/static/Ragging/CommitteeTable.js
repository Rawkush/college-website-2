import React from 'react';
import { StyledTable, TH, Container, Wrapper, H4 } from 'theme/Components';
import CommitteeTableItem from './CommitteeTableItem';
import CommitteeData from './raggingCommitteedata.json';

export default () => (
  <Container>
    <H4 center margin="20px 0px">
      Anti Ragging Committee
    </H4>
    <Wrapper w="700px">
      <StyledTable>
        <tbody>
          <tr>
            <TH>Name and Designation</TH>
            <TH>Status in the committee</TH>
          </tr>
        </tbody>
        {CommitteeData.map((member) => (
          <CommitteeTableItem {...member} key={member.name} />
        ))}
      </StyledTable>
    </Wrapper>
  </Container>
);
