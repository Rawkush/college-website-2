import React from 'react';
import styled from 'styled-components';
import { Container } from 'theme/Components';
import media from 'theme/media';
import photo from './../../../assets/images/college-image-sample.jpeg';
import ITIcon from './../../header/NavBar/Academics/Icons/IT';

const Background = styled.div`
  width: 100%;
  height: 400px;
  background: url(${photo}) center no-repeat;
  background-size: cover;
  ${media.phone`
    height: 475px;
  `};
`;

const Background2 = styled.div`
  width: 100%;
  height: 400px;
  background-image: linear-gradient(
    120deg,
    rgba(166, 192, 254, 0.7) 0%,
    rgba(246, 128, 132, 0.7) 100%
  );
  ${media.phone`
    height: 475px;
  `};
`;

const Heading = styled.h2`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 50px;
  color: white;
  text-align: center;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  display: flex;
  height: 400px;
  align-items: center;
  ${media.phone`
    flex-direction: column;
    padding: 30px 0px;
  `};
`;

const Wrapper1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${media.phone`
    flex: 2;
  `};
`;

const Wrapper2 = styled.div`
  flex: 3;
`;

const Quote = styled.div`
  color: white;
  text-align: center;
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 24px;
  margin-top: 100px;
  ${media.phone`
    margin-top: 0px;
  `};
`;

const Author = styled.div`
  color: white;
  text-align: right;
  font-family: 'Noto Serif', sans-serif;
  font-size: 18px;
  margin-top: 15px;
`;

const quote = {
  it: {
    quote: 'Intelligence is the ability to adapt to change.',
    author: 'Stephen Hawking',
  },
};

export default ({ name }) => (
  <Background>
    <Background2>
      <Container>
        <Wrapper>
          <Wrapper1>
            <ITIcon square />
          </Wrapper1>
          <Wrapper2>
            <Heading>{name}</Heading>
            <Quote>
              <em>{quote.it.quote}</em>
            </Quote>
            <Author> - {quote.it.author}</Author>
          </Wrapper2>
        </Wrapper>
      </Container>
    </Background2>
  </Background>
);
