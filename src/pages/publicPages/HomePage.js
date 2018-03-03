import React from 'react';
import { Link } from 'react-router-dom';

// Styled-Components
import { Page, Container } from './../../theme/Components';

// Defined components import
import Notification from './../../components/notifications/Notification';

const HomePage = () => (
  <Page>
    <Container>
      <Notification home />
      <Link to="/notification">See All</Link>
      <Link to="/student/register">studen</Link>
    </Container>
  </Page>
);

export default HomePage;
