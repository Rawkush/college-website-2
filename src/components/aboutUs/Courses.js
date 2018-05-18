import React from 'react';
import styled from 'styled-components';

//  Styled Components
import { Container, H3, HR } from 'theme/Components';

const courses = [
  {
    name: 'B.Tech(Civil Engineering)',
    time: '4 Years',
    seats: 60,
  },
  {
    name: 'B.Tech(Information Technology)',
    time: '4 Years',
    seats: 60,
  },
];

const Wrapper = styled.div`
  width: 90%;
  max-width: 500px;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const P = styled.p`
  font-family: 'Noto Serif';
`;

const Courses = ({ data }) => () => (
  <Container>
    <H3 center>Courses of Study</H3>
    {data.map(({ name, time, seats }) => (
      <React.Fragment key={name}>
        <Wrapper>
          <P>{name}</P>
          <P>{time}</P>
          <P>
            {seats}
            {' Seats '}
          </P>
        </Wrapper>
        <HR opa="0.7" w="25%" m="10px auto 0px auto" />
      </React.Fragment>
    ))}
  </Container>
);

export default Courses({ data: courses });
