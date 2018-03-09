import React from 'react';

//  Styled Components
import { Page, Container, H2 } from 'theme/Components';

//  Components
import Search from 'components/search/Search';

export default () => (
  <Page>
    <Container>
      <H2 center margin="115px auto 20px auto">
        Search Profiles
      </H2>
      <Search />
    </Container>
  </Page>
);
