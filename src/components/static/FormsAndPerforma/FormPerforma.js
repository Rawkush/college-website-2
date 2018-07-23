import React from 'react';
import { Wrapper, Container, A, H3 } from 'theme/Components';

import formsPerfomaData from './formsPerfomaData.json';

export default () => (
  <Container>
    <Wrapper w="700px">
      {formsPerfomaData.map(({ title, links }) => (
        <Wrapper m="30px auto" w="700px">
          <H3>{title}</H3>
          {links.map(({ name, link }) => (
            <Wrapper m="10px auto" w="700px">
              <A target="_blank" href={link}>
                {name}
              </A>
            </Wrapper>
          ))}
        </Wrapper>
      ))}
    </Wrapper>
  </Container>
);
