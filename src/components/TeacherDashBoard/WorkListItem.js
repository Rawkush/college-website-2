import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapperEnd = styled.div`
display: flex;
justify-content: flex-end;
width: 70%;
margin: 0 auto;
`

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
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

const Title = P.extend`
  font-weight: 600;
`;

const B = styled(Link)`
  display: flex;
  justify-content: flex-end;
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
const HR = styled.hr`
  width: 50vw;
  margin: 0 auto;
`;

export default ({ title, _id, edit, description }) => (
  <div>
    <Wrapper>
    <Title>{title}</Title>
    <P>{description}</P>
    </Wrapper>
    <WrapperEnd>{edit && <B to={`/teacher/editwork/${_id}`}>Edit</B>} </WrapperEnd >
   <HR />
  </div>
);
