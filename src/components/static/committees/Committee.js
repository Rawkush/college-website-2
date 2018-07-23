import React from 'react';
import Item from './CommitteeItem';
import data from './CommitteesData.json';

export default () => data.map((info) => <Item key={info.name} {...info} />);
