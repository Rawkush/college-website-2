import React from 'react';
import Lines from './LaboratoriesLines';

export default ({ data = [] } = {}) => (
  <div>{data.map((item) => <Lines key={item.name} {...item} />)}</div>
);
