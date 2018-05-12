import React from 'react';
import { Container, Wrapper, A } from 'theme/Components';

import { SubHeading, Heading, Text } from './Shared.styles';

const info = [
  {
    name: 'Principal Branch',
    mail: ['pplgec@gmail.com'],
    ph: '+91-11-25318161',
  },
  {
    name: 'Academic Branch',
    mail: ['deangec.delhi@gov.in', 'acd.cbpgecj@gmail.com '],
    ph: '+91-11-25318159',
  },
  {
    name: 'Administrative Branch',
    mail: ['cbpgecj@gmail.com'],
    ph: '+91-011-25318157',
  },
];

export default () => (
  <Container>
    <Wrapper>
      <Heading center>Phone And Email -</Heading>
      {info.map(({ name, mail, ph }) => (
        <div key={name}>
          <SubHeading>{name}</SubHeading>
          <Wrapper m="10px auto" padding="0px 0px 0px 20px">
            {mail.map((email) => <A href={`mailto:${mail}`}>{email}</A>)}
          </Wrapper>
          <Text padding="0px 0px 20px 30px">{ph}</Text>
        </div>
      ))}
    </Wrapper>
  </Container>
);
