import React from 'react';
import styled from 'styled-components';

//  Styled Components
import { Page, H2ResAuto, Wrapper } from 'theme/Components';

//  Components
import Map from './../../components/Body/MapIframe';

const P = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin: 20px;
  text-align: center;
`;

export default () => (
  <Page>
    <H2ResAuto>Location Page</H2ResAuto>
    <Wrapper w="800px">
      <Map />
      <P>
        The Nearest Metro station is Dwarka Mor and various private busses and
        DTC route number 835, 827 go to College.
      </P>
    </Wrapper>
  </Page>
);
