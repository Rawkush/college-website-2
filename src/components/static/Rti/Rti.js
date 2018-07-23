import React from 'react';
import styled from 'styled-components';
import { H2ResAuto, Container, Wrapper, A } from 'theme/Components';
import rtiData from './RtiData.json';
import RtiTabel from './RtiTabel';

const Div = styled.div`
  text-align: center;
`;

const P = styled.p`
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`;
const BR = styled.div`
  height: 40px;
`;

export default () => (
  <Container>
    <H2ResAuto>RTI(Right To Information Act) </H2ResAuto>
    <Wrapper>
      <RtiTabel info={rtiData} />
    </Wrapper>
    <br />
    <br />
    <Wrapper>
      <Div>
        <P>Phone number With STD Code </P>
        <p>011-25318159 </p>
        <P>Fax number with STD Code </P>
        <p>011-25318158 </p>
        <P>Email </P>
        <A href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=pplgec@gmail.com">
          pplgec@gmail.com
        </A>
        <BR />
        <A> Supply of information under RTI act 2005 </A>
        <br />
        <A>Rules </A>
        <BR />
      </Div>
    </Wrapper>
  </Container>
);
