import React from 'react';

//  Styled Default Components
import { Page, Container, Wrapper, H3 } from 'theme/Components';

//  Defined Components
import TeachersList from 'components/adminDashboard/TeachersList';

export default () => (
  <Page>
    <Container>
      <Wrapper>
        <H3 center margin="20px 0px">
          Teacher&apos;s List
        </H3>
        <TeachersList />
      </Wrapper>
    </Container>
  </Page>
);
