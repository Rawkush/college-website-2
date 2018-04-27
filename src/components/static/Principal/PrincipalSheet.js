import React from 'react';
import styled from 'styled-components';
import photo from './Principal.png'

const Name = styled.p`
  font-size: 30px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  text-align: center;
`;

const Desingnation = styled.p`
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  text-align: center;
`;

const Img = styled.img`
  margin-left: 32%;
  padding: 5px;
`;

const Contain = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
`;

const Addressing = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 20px;
`;

const Para = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
`;
const Quote = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
`;

export default ({
  name,
  desingnation,
  addressing,
  para1,
  para2,
  para3,
  para4,
  para5,
  para6,
  para7,
  quote,
}) => (
  <Contain>
    <Name>{name} </Name>
    <Desingnation>{desingnation} </Desingnation>
    <Img src={photo} />
    <Addressing> {addressing} </Addressing>
    <Para> {para1} </Para>
    <Para> {para2} </Para>
    <Para> {para3} </Para>
    <Para> {para4} </Para>
    <Para> {para5} </Para>
    <Para> {para6} </Para>
    <Para> {para7} </Para>
    <Quote> {quote} </Quote>
  </Contain>
);
