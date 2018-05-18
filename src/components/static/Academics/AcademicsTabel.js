import React from 'react';
import TabelItem from './AcademicsTabelItem';

export default ({ data = [] } = {}) => (
  <div>{data.map((item) => <TabelItem key={item.name} {...item} />)}</div>
);
