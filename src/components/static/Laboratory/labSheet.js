import React from 'react';
import { A } from 'theme/Components';

export default ({ info }) => (
  <div>
    {info.map((item, i) => <div> <A key={i++} > {item}<br/></A></div>)}
  </div>
);
