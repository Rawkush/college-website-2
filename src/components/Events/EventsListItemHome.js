import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  background: ${({ image }) => `url(${image.replace(/\\/g, '/')})`} center
    no-repeat;
  background-size: cover;
  height: 300px;
  width: 650px;
  display: inline-block;
  position: relative;
`;

const P1 = styled.p`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 25px;
  color: white;
  margin: 10px;
`;

const Meta = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const StyledLink = styled(Link)`
  margin: 0 auto;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Details = styled.p`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 20px;
  margin: 10px;
`;

export default ({
  name = '',
  _id = '',
  place = '',
  date = '',
  type = '',
  photos = [],
} = {}) => (
  <StyledLink to={`/event/${_id}`}>
    <Background image={`/${photos[0]}`}>
      <Meta>
        <P1>{name}</P1>
        <Details>
          {`${place} | ${moment(date).format('DD MMMM, YYYY')} | ${type}`}
        </Details>
      </Meta>
    </Background>
  </StyledLink>
);
