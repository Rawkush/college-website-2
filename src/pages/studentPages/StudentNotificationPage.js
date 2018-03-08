import React from 'react';

// Styled-Components
import { Page, Container } from './../../theme/Components';

// Defined components import
import Notification from './../../components/notifications/Notification';

const NotificationPage = () => (
  <Page>
    <Container>
      <Notification notification />
    </Container>
  </Page>
);

export default NotificationPage;
