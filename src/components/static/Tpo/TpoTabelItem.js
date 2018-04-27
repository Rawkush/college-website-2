import React from 'react';
import styled from 'styled-components';
// import { A } from 'theme/Components';
import media from 'theme/media';

const TD = styled.td`
  background-color: white;
  color: rgba(0, 0, 0, 0.81);
  padding: 14px 7px;
  text-decoration: none;
  font-weight: 400;
  ${({ title }) => (title ? 'width: 350px' : '')};
  ${media.phone`
    font-size: 14px;
    ${({ title }) => (title ? 'width: 250px' : '')};
  `};
`;

const TR = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const Name = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
`;

const P = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
`;

const P1 = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`;

const Contain = styled.div`
  padding-top: 0px;
`;
const Teacher = ({ name, Status }) => (
  <TR>
    <TD title>{name}</TD>
    <TD> {Status}</TD>
  </TR>
);

const Top = ({ name, contactNumber, email }) => (
  <Contain>
    <Name> {name} </Name>
    <P>Training & Placement Officer </P>
    <P> Contact Us: {contactNumber} </P>
    <P> Email: {email} </P>
    <br />
    <br />
    <P1> Training, Placement and Students' Personality Development Committee </P1>
    <br />
  </Contain>
);

const Cod = ({ name, year }) => (
  <TR>
    <TD title>{name}</TD>
    <TD> {year}</TD>
  </TR>
);

module.exports = {
  Teacher,
  Top,
  Cod,
};
