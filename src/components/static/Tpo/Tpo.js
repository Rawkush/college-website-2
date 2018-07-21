import React from 'react';
import { Item, ItemHead } from './TpoItem';
import data from './TpoData.json';
import dataHead from './TpoHeadData.json';

export const TpoHead = () =>
  dataHead.map((info) => <ItemHead key={info.name} {...info} />);
export const Tpo = () => data.map((info) => <Item key={info.name} {...info} />);
