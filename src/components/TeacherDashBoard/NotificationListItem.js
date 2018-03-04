import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {A}  from './../../theme/Components';

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

const WrapperEnd = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
margin: 0 auto;
`;

const B = styled(Link)`
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

export default ({
  title = '',
  description = '',
  file = '',
  link = '',
  tags = {},
  _id,
  edit,
} = {}) => (
  <div>
    <A href={link}>
      <H3>{title}</H3>
      <P>{description}</P>
    </A>
    {tags.branch ? <P>{tags.branch}</P> : ''}
    {tags.year ? <P>{tags.year}</P> : ''}
    {tags.rollNo ? <P>{tags.rollNo}</P> : ''}
    {file && <P>Download File</P>}
   
    <WrapperEnd>
    <B to="/teacher/addNotification">Add Notification</B>
    {edit && (<B to={`/teacher/editnotification/${_id}`}>Update</B>)}
  
    </WrapperEnd>
    <HR />
  </div>
);
