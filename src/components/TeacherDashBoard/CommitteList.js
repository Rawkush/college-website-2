import React from 'react';
import styled from 'styled-components';

// Components
import CommitteeListItem from './CommitteeListItem';

//  Styled Comoponents
const Title = styled.h4`
  margin: 50px 0px;
  font-size: 30px;
  font-family: 'Noto Serif', serif;
  text-align: center;
`;
export default ({ committee }) => (
  <div>
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
  </div>
);
