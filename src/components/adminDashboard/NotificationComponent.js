import React from 'react';
import { H3, ButtonLink, AlignCenter } from 'theme/Components';
import { ComponentBox, LinkDB } from './Shared.styles';

export default () => (
  <ComponentBox>
    <H3 center>Notifications</H3>
    <LinkDB text="Visit Page" p="10px" to="/notification" />
    <AlignCenter>
      <ButtonLink m="30px 0 0 0" to="/admin/notifications/add">
        Add Notification
      </ButtonLink>
    </AlignCenter>
  </ComponentBox>
);
