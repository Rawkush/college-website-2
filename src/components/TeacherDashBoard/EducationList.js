import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'theme/media';

const Title = styled.h4`
  margin: 50px 0px;
  font-size: 30px;
  font-family: 'Noto Serif', serif;
  text-align: center;
`;
const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const HR = styled.hr`
  width: 50vw;
  margin: 0 auto;
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
export default ({ education }) => ( 
  <div>
    <Wrapper>
    <Title>Education</Title>
    {education.map((elem) => <P key={elem}>{elem}</P>)}
    </Wrapper>
    <WrapperEnd>
    <B to="/teacher/addeducation">Update</B>
      </WrapperEnd>
<HR />
  </div>
);
