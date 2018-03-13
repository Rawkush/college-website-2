import React from 'react';
import { Page, Container, H2ResAuto } from 'theme/Components';

import Notifications from './../../components/TeacherDashBoard/Notification';

export default () => (
  <Page>
    <Container>
      <H2ResAuto>Your Notification&apos;s</H2ResAuto>
      <Notifications notification />
    </Container>
  </Page>
);
