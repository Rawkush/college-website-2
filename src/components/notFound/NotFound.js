import React from 'react';
import { Link } from 'react-router-dom';

import { Page, Container, ButtonLink, FlexCenter } from 'theme/Components';
import UnderConstructionIcon from './UnderConstructionIcon';

const NotFound = () => (
  <Page>
    <Container>
      <FlexCenter>
        <UnderConstructionIcon />
        <h1>The page you are looking for is Not Found.</h1>
        <ButtonLink to="/">Go Home</ButtonLink>
      </FlexCenter>
    </Container>
  </Page>
);

export default NotFound;
