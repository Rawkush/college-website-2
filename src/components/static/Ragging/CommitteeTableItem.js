import React from 'react';
import { TD, TR } from 'theme/Components';

export default ({ name, designation, status }) => (
  <TR>
    <TD title>
      {name}
      {name && designation ? ', ' : ''}
      {designation}
    </TD>
    <TD>{status}</TD>
  </TR>
);
