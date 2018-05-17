import React from 'react';
import Item from './LibraryItem';
import data from './LibraryData.json';

export default () => data.map((info) => <Item key={info.name} {...info} />);
