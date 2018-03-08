import React from 'react';
import { H3, ButtonLink, AlignCenter } from 'theme/Components';
import { ComponentBox, LinkDB } from './Shared.styles';

export default () => (
  <ComponentBox>
    <H3 center>Teachers</H3>
    <LinkDB text="Visit Page" p="10px" to="/admin/teacher" />
    <AlignCenter>
      <ButtonLink m="30px 0 0 0" to="/admin/registerteacher">
        Register Teacher
      </ButtonLink>
    </AlignCenter>
  </ComponentBox>
);
