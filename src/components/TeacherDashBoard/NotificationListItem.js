import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'theme/media';

import {A}  from './../../theme/Components';

const HR = styled.hr`
width: 50vw;
margin: 0 auto;
opacity: 0.3
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
width: 75%;
margin: 0 auto;
text-align: right;
${ media.phone`
text-align: center;
line-height: 50px;
`}
`;

const B = styled(Link)`
background: none;
text-decoration: none;
border: solid 1px rgba(0, 0, 0, 0.3); 
cursor: pointer;
padding: 5px 20px;
color: rgba(0, 0, 0, 0.6);
margin: 30px 0px;
border-radius: 4px;
transition: all 0.15s ease-in-out;
border: solid 1px rgba(179, 0, 0, 0.7);
color: rgba(179, 0, 0, 0.7);
&:hover {
  color: white;
  background: rgba(179, 0, 0, 0.7);
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
    {edit && (<B to={`/teacher/editnotification/${_id}`}>Update</B>)}
  
    </WrapperEnd>
    <HR />
  </div>
);
