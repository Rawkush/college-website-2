import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from 'theme/Components';
import { Title, HR, WrapperEnd } from './Shared.styles';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export default ({ specialisation } = {}) => (
  <div>
    <Wrapper>
      <Title>Specialisation</Title>
      {specialisation ? (
        specialisation.map((elem) => <p key={elem}>{elem}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
    <WrapperEnd>
      <ButtonLink to="/student/myprofile/updatespecialisation">
        Update
      </ButtonLink>
    </WrapperEnd>
    <HR />
  </div>
);
