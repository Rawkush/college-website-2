import React from 'react';
import styled from 'styled-components';
// Components
import CommitteeListItem from './CommitteeListItem';

//  Styled Comoponents
const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h4`
  margin: 50px 0px;
  font-size: 30px; 
  font-family: 'Noto Serif', serif;
  text-align: center;
`;

export default ({ committee }) => (
  <div>
    <Wrapper>
    {committee ? (
      <div>
        <Title>Committee </Title>
        {committee.map((elem) => (
          <CommitteeListItem key={elem._id} {...elem} edit />
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
    </Wrapper>
  </div>
);
