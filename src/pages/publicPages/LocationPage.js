import React from 'react';
import styled from 'styled-components';

//  Styled Components
import {
  Page,
  H2ResAuto,
  Wrapper,
  FlexCenter,
  Container,
} from 'theme/Components';

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
    <Container>
      <FlexCenter h="70vh">
        <Wrapper w="800px">
          <Map />
          <P>
            The Nearest Metro station is <strong>Dwarka Mor</strong> and various
            private busses and <br />DTC route number <strong>835</strong>,
            <strong> 827</strong>, <strong>878</strong> go to College.
          </P>
        </Wrapper>
      </FlexCenter>
    </Container>
  </Page>
);
