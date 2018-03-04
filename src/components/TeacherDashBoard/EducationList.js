import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
display: flex;
justify-content: flex-end;
`
const B = styled(Link)`
 margin-right: 9%;
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
