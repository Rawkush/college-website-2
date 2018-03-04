import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Components
import WorkListItem from './WorkListItem';


const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const WrapperEnd = styled.div`
display: flex;
justify-content: flex-end;
width: 20%;

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
  }`;

  const HR = styled.hr`
  width: 50vw;
  margin: 0 auto;
`;

const Title = styled.h4`
  margin: 50px 0px;
  font-size: 30px;
  font-family: 'Noto Serif', serif;
  text-align: center;
  `;

export default ({ work }) => (
  <div>
    <Wrapper>
    {work ? (
      <div>
        <Title>Works </Title>
        {work.map((workElem) => (
          <WorkListItem key={workElem._id} {...workElem} edit />
        ))}
      </div>
    ) : (
      <p>Loading...</p> 
    )}
    </Wrapper>
    <WrapperEnd>
    <B to="/teacher/addwork">Add Work </B>
       </WrapperEnd>
        
  </div>
);
