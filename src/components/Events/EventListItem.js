import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'theme/media';

const Background = styled.div`
  background: ${({ image }) => `url(${image.replace(/\\/g, '/')})`} center
    no-repeat;
  background-size: cover;
  min-width: 50%;
  height: 300px;
  width: 100%;
  border-radius: 7px 7px 0px 0px;
`;

const Wrapper = styled.div`
  width: 45%;
  border-radius: 3px;
  margin-bottom: 60px;
  ${media.phone`
    width: 100%;
  `};
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
  }
`;

const Wrapper2 = styled.div`
  border-radius: 0px 0px 3px 3px;
  padding: 1px 20px;
  background: #efefef;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Title = styled.p`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 22px;
`;

const Place = styled.div`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 20px;
  padding: 5px 0px;
`;

const DateDiv = styled.div`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 20px;
  padding: 5px 0px 10px 0px;
`;

export default ({
  name = '',
  place = '',
  date = '',
  photos = [],
  _id,
} = {}) => (
  <Wrapper>
    <StyledLink to={`/event/${_id}`}>
      <Background image={`/${photos[0]}`} />
      <Wrapper2>
        <Title>{name}</Title>
        <Place>{place}</Place>
        <DateDiv>{moment(date).format('DD MMMM, YYYY')}</DateDiv>
      </Wrapper2>
    </StyledLink>
  </Wrapper>
);
