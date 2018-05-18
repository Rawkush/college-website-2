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

const F = styled.div`
  font-family: 'Noto Serif', serif;
  font-weight: 400;
`;

export default ({ dean, head, staff, contact, email }) => (
  <div>
    <br />
    {head ? (
      <F>
        <H3> Head:</H3> {head}
      </F>
    ) : (
      <F>
        <H3>Dean:</H3> {dean}
      </F>
    )}
    {staff ? (
      <div>
        <H4> Staff:</H4> {staff.map((item) => <F key={item}> {item}</F>)}
      </div>
    ) : (
      ''
    )}
    <F>
      <H4> contact: </H4> {contact}
    </F>
    <H4>Email: </H4> {email.map((item) => <F key={item}> {item} </F>)}
    <br />
  </div>
);
