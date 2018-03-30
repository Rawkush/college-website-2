import React from 'react';
import styled from 'styled-components';
import { Flex, Container } from 'theme/Components';
import photo from './photo.jpeg';

const Background = styled.div`
  background: #f1f1f1;
  padding: 10px 0px;
`;

const H3 = styled.h3`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 25px;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-out;
`;

const Wrapper1 = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  &:hover {
    > img {
      transform: translateY(-3px);
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.35);
    }
  }
`;

const P = styled.p`
  font-family: 'Satisfy', sans-serif;
  font-size: 25px;
  margin-bottom: 0px;
`;

const P2 = styled.p`
  font-family: 'open Sans', sans-serif;
  font-size: 18px;
`;

const givePosition = (pos) => {
  switch (pos) {
    case 'hod':
      return 'Head of Department';
    case 'aprof':
      return 'Assitance Professor';
    default:
      return 'Assistance Professor';
  }
};

const FacultyListItem = ({ photo: pic, name, position } = {}) => (
  <Wrapper1>
    <Image src={pic} />
    <P>{name}</P>
    <P2>{givePosition(position)}</P2>
  </Wrapper1>
);

const FlexMod = Flex.extend`
  justify-content: space-around;
`;

export default ({ teachers = [] } = {}) => (
  <Background>
    <Container>
      <H3>Faculty</H3>
      <FlexMod wrap>
        {teachers.map((elem) => (
          <FacultyListItem {...elem} key={elem.name} photo={photo} />
        ))}
      </FlexMod>
    </Container>
  </Background>
);
