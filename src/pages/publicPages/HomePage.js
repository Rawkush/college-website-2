import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-Components
import {
  Page,
  Container,
  FlexCenter as Flex,
  H2ResAuto,
} from 'theme/Components';
import media from 'theme/media';

// Defined components import
import Carousel from './../../components/Body/Carousel';
import Notification from './../../components/notifications/Notification';
import GetToKnow from './../../components/Body/GetToKnow';

const NotificationLink = styled(Link)`
  background: none;
  cursor: pointer;
  text-decoration: none;
  padding: 10px 50px;
  color: ${({ teacher }) => (teacher ? 'rgba(0, 0, 0, 0.6)' : 'rgb(97, 0, 0)')};
  margin: 55px auto;
  font-size: 20px;
  border-radius: 3px;
  border: solid 2.4px
    ${({ teacher }) =>
      teacher ? 'rgba(0, 0, 0, 0.5)' : 'rgba(84, 0, 0, 0.58)'};
  font-weight: 400;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
    background: ${({ teacher }) =>
      teacher ? 'rgba(43, 42, 42, 0.7)' : 'rgb(97, 0, 0)'};
    border: solid 2.4px
      ${({ teacher }) =>
        teacher ? 'rgba(43, 42, 42, 0.7)' : 'rgba(84, 0, 0, 0.58))'};
    transform: translateY(-3px);
    box-shadow: 0 10px 11px rgba(0, 0, 0, 0.3);
    > i {
      transform: rotate(-45deg) scale(1.4);
      border-color: solid rgb(256, 256, 256);
    }
  }
  ${media.phone`
    margin: 30px auto 55px auto;
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
  background: linear-gradient(
    to right,
    #fbf9f9 0%,
    #e6e3e3 50%,
    #fc3c3c 50%,
    #c14545 100%
  );
  ${media.phone`
    background: linear-gradient(
      to bottom,
      #fbf9f9 0%,
      #e6e3e3 50%,
      #fc3c3c 50%,
      #c14545 100%
    );
  `};
`;

const FlexCenter = Flex.extend`
  ${media.phone`
    flex-direction: column;
  `};
`;

const FlexItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 25px;
  margin: 40px 0px 20px 0px;
  font-family: 'Alegreya Sans', sans-serif;
  color: ${({ teacher }) => (teacher ? '#525151' : '#7d0000')};
  ${media.phone`
    margin: 77px 0px 30px 0px;
  `};
`;

const HomePage = () => (
  <Page mtp="69px">
    <Carousel />
    <Container>
      <H2ResAuto margin="40px 0px 25px 0px" marginRes="40px 0px 25px 0px">
        Notifications
      </H2ResAuto>
    </Container>
    <NotificationBg>
      <Container>
        <FlexCenter>
          <FlexItem>
            <Title teacher>General Notification</Title>
            <Notification home general />
            <NotificationLink teacher to="/notification/general">
              See More
              <I />
            </NotificationLink>
          </FlexItem>
          <FlexItem>
            <Title>Student&apos; Notification</Title>
            <Notification home />
            <NotificationLink to="/notification">
              See More
              <I />
            </NotificationLink>
          </FlexItem>
        </FlexCenter>
      </Container>
    </NotificationBg>
    <GetToKnow />
  </Page>
);

export default HomePage;
