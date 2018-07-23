import React from 'react';
import { Container } from 'theme/Components';
import raggingData from './raggingData.json';

//  Components
import LetterItem from './LetterListItem';

export default () => (
  <Container>{raggingData.map((data) => <LetterItem {...data} />)}</Container>
);
