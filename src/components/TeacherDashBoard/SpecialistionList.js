import React from 'react';
import styled from 'styled-components';
import { ButtonLink, HR } from 'theme/Components';
import media from 'theme/media';

const Title = styled.h4`
  margin: 50px 0px;
  font-size: 30px;
  font-family: 'Noto Serif', serif;
  text-align: center;
`;

const Item = styled.p`
  font-family: 'Open Sans', sans-serif;
  padding: 20px 0px;
  display: block;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  word-wrap: break-word;
  hyphens: auto;
`;

const WrapperEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.phone`
    justify-content: ${({ center }) => (center ? 'center' : 'flex-end')};
  `};
`;

export default ({ specialisation }) => (
  <div>
    <Title>Specialisation</Title>
    {specialisation ? (
      specialisation.map((elem) => <Item key={elem}>{elem}</Item>)
    ) : (
      <p> Loading</p>
    )}
    <WrapperEnd>
      <ButtonLink to="/teacher/addspecialisation">Update</ButtonLink>
    </WrapperEnd>
    <HR />
  </div>
);
