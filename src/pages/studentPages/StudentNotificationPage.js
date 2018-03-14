import React from 'react';

// Styled-Components
import { Page, Container, H2ResAuto } from './../../theme/Components';

// Defined components import
import Notification from './../../components/StudentDashboard/Notification';

const NotificationPage = () => (
  <Page>
    <Container>
      <H2ResAuto>Your Notifications</H2ResAuto>
      <Notification notification />
    </Container>
  </Page>
);

export default NotificationPage;
