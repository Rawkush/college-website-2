import React from 'react';
import { A } from 'theme/Components';

export default ({ name, link }) => (
  <div>
    <A href={link}>{name} </A>
  </div>
);
