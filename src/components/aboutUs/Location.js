import React from 'react';
import styled from 'styled-components';

//  Styled Components
import { Wrapper, H2ResAuto, Container } from 'theme/Components';

//  Components
import Map from './../Body/MapIframe';

const P = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin: 20px;
  text-align: center;
`;

export default () => (
  <Container>
    <Wrapper w="800px">
      <H2ResAuto>Location</H2ResAuto>
      <Map />
      <P>
        The Nearest Metro station is <strong>Dwarka Mor</strong> and various
        private busses and <br />DTC route number <strong>835</strong>,
        <strong> 827</strong>, <strong>878</strong> go to College.
      </P>
    </Wrapper>
  </Container>
);
