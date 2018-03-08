import React from 'react';
import { H3, ButtonLink, AlignCenter, Flex } from 'theme/Components';
import styled from 'styled-components';
import { ComponentBox, LinkDB } from './Shared.styles';

const Wrapper1 = styled.div`
  flex: 1;
`;

export default () => (
  <ComponentBox>
    <H3 center>Time Table</H3>
    <Flex>
      <Wrapper1>
        <LinkDB text="Even" to="/timetable/even" p="10px" />
      </Wrapper1>
      <Wrapper1>
        <LinkDB text="Odd" to="/timetable/odd" p="10px" />
      </Wrapper1>
    </Flex>
    <AlignCenter>
      <ButtonLink m="10px" to="/admin/timetable/add">
        Add Time Table
      </ButtonLink>
    </AlignCenter>
  </ComponentBox>
);
