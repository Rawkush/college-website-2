import React from 'react';


import Dean from './Dean';

import media from './../../../../theme/media';
import { Flex, Container } from './../../../../theme/Components';

const NavFlex = Flex.extend`
  ${media.phone`
    flex-direction: column;
  `};
`;

export default ({ click }) => (
    <Container>
      <NavFlex>
        <Dean click={click} />
      </NavFlex>
    </Container>
  );
  