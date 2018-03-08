import React from 'react';

// Styled-Components
import { Page, Container, H2Res } from './../../theme/Components';

// Defined components import
import Notification from './../../components/notifications/Notification';

const NotificationPage = () => (
  <Page>
    <Container>
      <H2Res center margin="120px 0px 18px 0px" marginRes="94px 0px 18px 0px">
        Notifications
      </H2Res>
      <Notification notification />
    </Container>
  </Page>
);

export default NotificationPage;
