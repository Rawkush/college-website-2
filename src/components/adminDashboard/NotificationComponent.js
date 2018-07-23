import React from 'react';
import styled from 'styled-components';
import { H3, ButtonLink, AlignCenter, Flex } from 'theme/Components';
import { ComponentBox, LinkDB } from './Shared.styles';

const Wrapper1 = styled.div`
  flex: 1;
`;

export default () => (
  <ComponentBox>
    <H3 center>Notifications</H3>
    <Flex>
      <Wrapper1>
        <LinkDB text="Notifications" p="10px" to="/notification" />
      </Wrapper1>
      <Wrapper1>
        <LinkDB
          text="General Notifications"
          p="10px"
          to="/notification/general"
        />
      </Wrapper1>
    </Flex>
    <AlignCenter>
      <ButtonLink m="30px 0 0 0" to="/admin/notifications/add">
        Add Notification
      </ButtonLink>
    </AlignCenter>
  </ComponentBox>
);
