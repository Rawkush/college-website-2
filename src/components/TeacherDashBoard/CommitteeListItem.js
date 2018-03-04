import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonLink } from 'theme/Components';

const Wrapper1 = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
margin: 0 auto;
`;

const HR = styled.hr`
  width: 50vw;
  margin: 0 auto;
`;
const P = styled.p`
  font-family: 'Open Sans', sans-serif;
  padding: 20px 0px;
  display: block;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  word-wrap: break-word;
  hyphens: auto;
`;

const H3 = styled.h3`
  font-family: 'Open Sans', sans-serif;
  padding: 20px 0px;
  display: block;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  hyphens: auto;
`;

const B = styled(Link)`
 margin-right: 10%;
  text-decoration: none;
  border: solid 1px rgba(0, 0, 0, 0.27);
  padding: 5px 10px;
  display: inline-block;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  transition: all 0.1s ease;
  &:hover {
    color: rgba(136, 0, 0, 0.8);
    border: solid 0.5px rgba(136, 0, 0, 0.8);
  }
`;


export default ({ name, designation, status, _id, edit }) => (
  <div>
    <H3>{name}</H3>
    <P>{designation}</P>
    <P>{status}</P>
    {edit && (
      <Wrapper1>
        <B to="/teacher/addcommitte">Add Committe </B>
        <B to={`/teacher/myprofile/editcommittee/${_id}`}>Update</B>
      </Wrapper1>
    )}
    <HR />
  </div>
);
