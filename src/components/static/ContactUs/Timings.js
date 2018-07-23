import React from 'react';
import {
  Container,
  H2ResAuto,
  Wrapper,
  FlexResponsiveStack as FlexRes,
} from 'theme/Components';

import { SubHeading, Heading, Text } from './Shared.styles';

export default () => (
  <Container>
    <Wrapper>
      <H2ResAuto>Contact Us</H2ResAuto>
      <Heading center>You can visit us - </Heading>
      <FlexRes>
        <SubHeading center>From</SubHeading>
        <Text center>9:30 A.M. to 1:00 P.M</Text>
        <SubHeading center>And</SubHeading>
        <Text center>2:00 P.M. To 5:00 P.M.</Text>
      </FlexRes>
    </Wrapper>
  </Container>
);
