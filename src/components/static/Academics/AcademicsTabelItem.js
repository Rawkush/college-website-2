import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
  font-size: 16px;
  font-family: 'Noto Serif', serif;
  font-weight: 600;
`;

const H4 = styled.h4`
  font-size: 16px;
  font-family: 'Noto Serif', serif;
  font-weight: 600;
`;

const Heading = styled.div`
  font-family: 'Noto Serif', serif;
  font-weight: 400;
`;

export default ({ dean, head, staff, contact, email }) => (
  <div>
    <br />
    {head ? (
      <Heading>
        <H3> Head:</H3> {head}
      </Heading>
    ) : (
      <Heading>
        <H3>Dean:</H3> {dean}
      </Heading>
    )}
    {staff ? (
      <div>
        <H4> Staff:</H4>{staff.map((item) => <Heading key={item}> {item}</Heading>)}
      </div>
    ) : (
      ''
    )}
    <Heading>
      <H4> contact: </H4> {contact}
    </Heading>
    <H4>Email: </H4>{email.map((item) => <Heading key={item}> {item} </Heading>)}
    <br />
  </div>
);
