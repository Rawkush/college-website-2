import React from 'react';
import styled from 'styled-components';
import { Container } from 'theme/Components';
import media from 'theme/media';

//  Components
import Map from './MapIframe';
import FaceBook from './FaceBookIframe';
import CollegeImage from './CollegeImage';

const Background = styled.div`
  background: #efefef;
  padding: 1px 10px;
`;

const Wrapper = styled.div`
  margin: 50px 0px;
`;

const Location = styled.div`
  margin: 50px 0px;
  display: flex;
  ${media.phone`
    flex-direction: column;
  `};
`;

const Social = styled.div`
  margin: 100px 0px;
  display: flex;
  ${media.phone`
    flex-direction: column;
    margin: 50px 0px;
  `};
`;

const About = styled.div`
  margin: 50px 0px 100px 0px;
  display: flex;
  ${media.phone`
    flex-direction: column;
    margin: 50px 0px;
  `};
`;

const Wrapper1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${media.phone`
    order: -1;
  `};
`;

const Wrapper2 = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 22px;
  max-width: ${({ big }) => big || '70%'};
  text-align: center;
`;

const H2 = styled.h2`
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: bold;
  font-size: 30px;
`;

const H2Head = styled.h2`
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
`;

const text =
  'Only a short walk from Rawta Mor. Dwarka mor is the nearest metro station.';

const text2 =
  'Follow us on the social media to get to all the updates about the college.';

const text3 =
  'The Department of Training and Technical Education, Govt. of Delhi, in its mission to promote and establish centre of excellence in form of Institutes has added Ch.B.P.Government Engineering College at Jaffarpur, Delhi, from academic session 2007-08.';

export default () => (
  <Wrapper>
    <Background>
      <Container>
        <H2Head>Get To Know</H2Head>
        <About>
          <Wrapper2>
            <CollegeImage />
          </Wrapper2>
          <Wrapper1>
            <H2>About {''} Us</H2>
            <P big="90%">{text3}</P>
          </Wrapper1>
        </About>
        <Location>
          <Wrapper1>
            <H2>LOCATE {''} US</H2>
            <P>{text}</P>
          </Wrapper1>
          <Wrapper2>
            <Map />
          </Wrapper2>
        </Location>
        <Social>
          <Wrapper2>
            <FaceBook />
          </Wrapper2>
          <Wrapper1>
            <H2>SOCIAL</H2>
            <P>{text2}</P>
          </Wrapper1>
        </Social>
      </Container>
    </Background>
  </Wrapper>
);
