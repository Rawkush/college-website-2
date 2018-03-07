import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import media from '../../theme/media';

import { Container } from './../../theme/Components';

const EventsContainer = styled.div`
  width: 100%;
  height: 400px;
  background: #fff;
  position: relative;
  margin: 50px 0px 70px 0px;
  ${media.phone`
    box-shadow: 0px 1px rgba(0, 0, 0, 0.2196078431372549);
    height: 10vh;
  `};
`;



const Image1 = styled.img`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background: black;
  -webkit-filter: blur(3px); /* Safari 6.0 - 9.0 */
  filter: blur(3px);
`;

const Event = styled.div`
  position: absolute;
  top: 3%;
  left: 50%;
  margin-top: 2%;
  color: white;
  transform: translate(-50%);
  font-size: 1.2rem;
  font-weight: 400;
`;
const Name = styled.div`
  position: absolute;
  bottom: 4%;
  left: 50%;
  margin-bottom: 2%;
  color: white;
  transform: translate(-50%);
  font-size: 1.4rem;
  font-weight: 400;
`;
const Image2 = styled.img`
  width: 50%;
  height: 200px;
  margin: 0 auto;
  background: pink;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // z-index: 100;
`;

const Place = styled.div`
  position: absolute;
  bottom: 36%;
  left: 30%;
  transform: translate(-50%);
  // z-index: 100;
  font-size: 1.2rem;
  font-weight: 300;
  color: black;
  text-decoration: underline;
`;

const Date = styled.div`
  position: absolute;
  bottom: 28%;
  left: 32%;
  transform: translate(-50%);
  // z-index: 100;
  font-size: 1.2rem;
  font-weight: 300;
  color: black;
`;

const I = styled.i`
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 7px;
`;
const PL = styled.p`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  position: absolute;
  bottom: 50%;
  left: 15%;
`;

const PR = styled.p`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  position: absolute;
  bottom: 49%;
  right: 15%;
`;

const EventsListItem = ({ name, date, place, _id, auth, photos }) => (
  <div>
    <EventsContainer>
      <Container>
        <Image1 src={photos || '/'} />
        <Event> Events </Event>
        <Name> {name || 'Music Fest'} </Name>
        <Link to={`/events/view/${_id}`}>
          <Image2 src={photos || '/'} alt={name || 'Music'} />
          <Place> {place || 'MP hall'} </Place>
          <Date>{moment(date).format('dd MMM, yyyy') || Date} </Date>
        </Link>
        <Link to="/">
          <PL>
            <I />
          </PL>
        </Link>
        <Link to="/">
          <PR>
            <I />
          </PR>
        </Link>
        {auth && <Link to={`/admin/events/edit/${_id}`}>Edit</Link>}
      </Container>
    </EventsContainer>
   
  </div>
);

export default EventsListItem;
