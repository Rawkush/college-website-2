import React from 'react';

import { Page, Container, ButtonLink, FlexCenter } from 'theme/Components';
import UnderConstructionIcon from './UnderConstructionIcon';

const Wrapper = FlexCenter.extend`
  justify-content: center;
  align-items: center;
  text-align: center;
  height: calc(100vh - 200px);
  flex-direction: column;
`;

const NotFound = () => (
  <Page>
    <Container>
      <Wrapper>
        <UnderConstructionIcon />
        <h1>The page you are looking for is Not Found.</h1>
        <ButtonLink to="/">Go Home</ButtonLink>
      </Wrapper>
    </Container>
  </Page>
);

export default NotFound;
