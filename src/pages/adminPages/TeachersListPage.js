import React from 'react';

//  Styled Default Components
import { Page, Container, Wrapper, H2ResAuto } from 'theme/Components';

//  Defined Components
import TeachersList from 'components/adminDashboard/TeachersList';

export default () => (
  <Page>
    <Container>
      <Wrapper>
        <H2ResAuto>Teacher&apos;s List</H2ResAuto>
        <TeachersList />
      </Wrapper>
    </Container>
  </Page>
);
