import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-Components
import { Page, Container, FlexCenter, H2ResAuto } from 'theme/Components';
import media from 'theme/media';

// Defined components import
import Notification from './../../components/notifications/Notification';
import Events from './../../components/Events/EventsListHome';
import GetToKnow from './../../components/Body/GetToKnow';

const NotificationLink = styled(Link)`
  background: none;
  cursor: pointer;
  text-decoration: none;
  padding: 10px 50px;
  color: rgba(0, 0, 0, 0.6);
  margin: 55px auto;
  font-size: 20px;
  border-radius: 3px;
  border: solid 2.4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
    background: rgba(43, 42, 42, 0.7);
    border: solid 2.4px rgba(43, 42, 42, 0.7);
    transform: translateY(-3px);
    box-shadow: 0 10px 11px rgba(0, 0, 0, 0.3);
    > i {
      transform: rotate(-45deg) scale(1.4);
      border-color: white;
    }
  }
  ${media.phone`
    margin: 10px auto 20px auto;
    font-size: 19px;
    padding: 10px 44px;   
  `};
`;

const I = styled.i`
  border: solid rgba(0, 0, 0, 0.6);
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 3px;
  margin-bottom: 2px;
  transform: rotate(-45deg) scale(1.3);
`;

const NotificationBg = styled.div`
  background: rgba(221, 221, 221, 0.3);
`;
const HomePage = () => (
  <Page>
    <Container>
      <H2ResAuto>Notifications</H2ResAuto>
    </Container>
    <NotificationBg>
      <Container>
        <Notification home />
        <FlexCenter>
          <NotificationLink to="/notification">
            See More
            <I />
          </NotificationLink>
        </FlexCenter>
      </Container>
    </NotificationBg>
    <Events />
    <GetToKnow />
  </Page>
);

export default HomePage;
