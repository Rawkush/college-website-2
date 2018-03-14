import React from 'react';

//  Styled Components
import { Page, Container, H2ResAuto } from 'theme/Components';

//  Components
import Search from 'components/search/Search';

export default () => (
  <Page>
    <Container>
      <H2ResAuto>Search Profiles</H2ResAuto>
      <Search />
    </Container>
  </Page>
);
