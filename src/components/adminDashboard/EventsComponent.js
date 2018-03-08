import React from 'react';
import { H3, ButtonLink, AlignCenter, Flex } from 'theme/Components';
import styled from 'styled-components';
import { ComponentBox, LinkDB } from './Shared.styles';

const Wrapper1 = styled.div`
  flex: 1;
`;

export default () => (
  <ComponentBox>
    <H3 center>Events</H3>
    <Flex>
      <Wrapper1>
        <LinkDB text="Cultural" to="/events/cultural" p="10px" />
      </Wrapper1>
      <Wrapper1>
        <LinkDB text="Sports" to="/events/sports" p="10px" />
      </Wrapper1>
    </Flex>
    <AlignCenter>
      <ButtonLink m="10px" to="/admin/events/add">
        Add Event
      </ButtonLink>
    </AlignCenter>
  </ComponentBox>
);
