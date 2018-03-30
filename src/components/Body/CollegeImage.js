import React from 'react';
import styled from 'styled-components';
import media from 'theme/media';
import { Link } from 'react-router-dom';
import imageUrl from './../../assets/images/college-image-sample.jpeg';
import NextIcon from './NextIcon';

const Image = styled.div`
  background: url(${imageUrl}) no-repeat center;
  height: 400px;
  width: 85%;
  background-size: cover;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
  position: relative;
  perspective: 250px;
  transition: all 0.2s ease-out;
  ${media.phone`
    height: 255px;    
    width: 100%;
  `};
  &:hover {
    box-shadow: 0px 12px 27px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
`;

const Title = styled.h3`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 100px;
  text-align: center;
  font-weight: bold;
  color: white;
  position: absolute;
  bottom: 0px;
  width: 100%;
  transform: rotateY(5deg);
  ${media.phone`
    font-size: 70px;
  `};
`;

const See = styled.h3`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: white;
  position: absolute;
  bottom: -33px;
  right: 25px;
  ${media.phone`
    font-size: 30px;
    bottom: -25px;    
  `};
`;

const StyledLink = styled(Link)`
  &:hover {
    > h3 {
      > svg {
        transform: translateX(3px);
      }
    }
  }
`;

export default () => (
  <Image>
    <Title>About Us</Title>
    <StyledLink to="/about">
      <See>
        See More<NextIcon />
      </See>
    </StyledLink>
  </Image>
);
