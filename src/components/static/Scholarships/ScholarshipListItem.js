import React from 'react';
import styled from 'styled-components';

import { A } from 'theme/Components';

const Heading = styled.h4`
  font-family: 'Noto Serif', serif;
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Content = styled.p`
  font-size: 17px;
  font-family: 'Alegreya Sans', sans-serif;
  margin-left: 40px;
`;

export default ({ title, content, link }) => (
  <div>
    <Heading>{title}</Heading>
    <Content>
      {content}
      <A target="_blank" href={link}>
        Click Here.
      </A>
    </Content>
  </div>
);
