import React from 'react';

// Styled-Components
import { Page, Container, H2ResAuto } from './../../theme/Components';

// Defined components import
import Notification from './../../components/notifications/Notification';

const NotificationPage = ({ general = false } = {}) => (
  <Page>
    <Container>
      <H2ResAuto>{general ? `General${' '}` : ''}Notifications</H2ResAuto>
      <Notification notification general={general} />
    </Container>
  </Page>
);

export default NotificationPage;
