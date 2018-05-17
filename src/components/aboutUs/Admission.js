import React from 'react';
import styled from 'styled-components';

//  Styled Components
import { Wrapper, H2ResAuto, A } from 'theme/Components';

//  Components

const P = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin: 20px;
  text-align: center;
`;

export default () => (
  <Wrapper m="100px auto">
    <H2ResAuto>Admission</H2ResAuto>
    <P>
      Application can also be submitted online through the
      <A href="http://ipu.ac.in">Unversity&apos;s website.</A>
      <br />
      <br />
      <br />
      Further information please contact admission helpline:
      <br />
      <br />
      Guru Gobind Singh Indraprastha University
      <br />
      <br />
      Sector - 16C, Dwarka Delhi - 110078, India
      <br />
      <br />
      Admission Helpline: +91-11-25302167, 25302168, 25302169
      <br />
      <br />
      <br />
      <A href="http://ipu.admissionhelp.com">Online Admission</A>
    </P>
  </Wrapper>
);
