import React from 'react';
import Item from './LaboratoriesItem';
import data from './LaboratoriesData.json';

export default () => data.map((info) => <Item key={info.name} {...info} />);
