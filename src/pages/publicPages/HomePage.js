import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-Components
import { Page, Container, FlexCenter, H2Res } from 'theme/Components';
import media from 'theme/media';

// Defined components import
import Notification from './../../components/notifications/Notification';
// import Event from './../../components/Events/EventsListItem';
// import GetToKnow from './../../components/Body/GetToKnow';
// import Map from './../../components/Body/map';

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
  }
  ${media.phone`
    margin: 20px auto;    
  `};
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

const NotificationBg = styled.div`
  background: rgba(221, 221, 221, 0.3);
`;

const HomePage = () => (
  <Page>
    <Container>
      <H2Res center margin="115px 0px 50px 0px" marginRes="100px 0px 20px 0px">
        Notifications
      </H2Res>
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
    <Container>
      <Div />
      {/* <Link to="/student/register">studen</Link> */}
      {/* <Event />
      <GetToKnow /> */}

      {/* <Map /> */}
    </Container>
  </Page>
);

export default HomePage;
