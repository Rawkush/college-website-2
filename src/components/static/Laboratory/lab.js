import React from 'react';
import styled from 'styled-components';
import { Container, Wrapper } from 'theme/Components';
import {
common
} from './labData.json';

import LabSheet from './labSheet';

const Head = styled.p`
  text-align: "center";
  font-weight: 600;
  font-style: font-family: 'Noto Serif', serif;
`;

const CommonLab = () => (
  <Container>
    <Head>CommonLabs </Head>
    <Wrapper>
      <LabSheet info={common} />
    </Wrapper>
  </Container>
);

module.exports = {
  CommonLab,
};
