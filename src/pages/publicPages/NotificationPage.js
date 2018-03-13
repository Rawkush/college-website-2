import React from 'react';

// Styled-Components
import { Page, Container, H2ResAuto } from './../../theme/Components';

// Defined components import
import Notification from './../../components/notifications/Notification';

const NotificationPage = () => (
  <Page>
    <Container>
      <H2ResAuto>Notifications</H2ResAuto>
      <Notification notification />
    </Container>
  </Page>
);

export default NotificationPage;
