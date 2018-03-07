import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-Components
import { Page, Container } from './../../theme/Components';

// Defined components import
import Notification from './../../components/notifications/Notification';
import Event from './../../components/Events/EventsListItem';
import GetToKnow from './../../components/Body/GetToKnow';
// import Map from './../../components/Body/map';

const NotificationButton = styled.button`
  margin-top: 85px;
  text-align: center;
  background: none;
  cursor: pointer;
  text-decoration: none;
  padding: 10px 50px;
  color: rgba(0, 0, 0, 0.6);
  margin: 30px 0px;
  transition: all 0.15s ease-in-out;
  border: solid 1.4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  &:hover {
    color: white;
    background: rgba(43, 42, 42, 0.7);
  }
`;

const I = styled.i`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 3px;
  margin-bottom: 2px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const Div = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const HomePage = () => (
  <Page>
    <Container>
      <Notification home />
      <Div>
        <Link to="/notification">
          <NotificationButton>
            More
            <I />
          </NotificationButton>
        </Link>
      </Div>
      {/* <Link to="/student/register">studen</Link> */}
      <Event />
      <GetToKnow />

      {/* <Map /> */}
    </Container>
  </Page>
);

export default HomePage;
