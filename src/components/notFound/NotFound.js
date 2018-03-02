import React from 'react';
import { Link } from 'react-router-dom';

import { Page, Container } from 'theme/Components';

const NotFound = () => (
  <Page>
    <Container>
      <h1>
        Not Found - <Link to="/">Go Home</Link>
      </h1>
    </Container>
  </Page>
);

export default NotFound;
