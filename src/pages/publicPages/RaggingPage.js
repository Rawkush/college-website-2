import React from 'react';
import styled from 'styled-components';
import { Page, H2ResAuto, H4, Wrapper } from 'theme/Components';

//  Components
import CommitteeTable from './../../components/static/Ragging/CommitteeTable';
import Letter from './../../components/static/Ragging/RaggingLetter';
import Undertaking from './../../components/static/Ragging/Undertaking';

const Note = styled.p`
  font-family: 'Alegreya Sans';
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
`;

export default () => (
  <Page>
    <H2ResAuto>Regulations On Ragging</H2ResAuto>
    <H4 center margin="50px 0px 20px 0px">
      Athar Hussain | Proctor
    </H4>
    <Wrapper w="900px">
      <Note>
        Note: Attention all the students of CBPGEC and their parents
        notification regarding prevention of ragging.
      </Note>
    </Wrapper>
    <CommitteeTable />
    <Letter />
    <Undertaking />
  </Page>
);
