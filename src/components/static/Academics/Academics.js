import React from 'react';
import Item from './AcademicsItem';
import data from './AcademicsData.json';

export default () => data.map((info) => <Item key={info.name} {...info} />);
