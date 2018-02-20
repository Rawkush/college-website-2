import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
import { A } from 'theme/Components';

const StyledDiv = styled.div`
  padding: 2px 5px;
`;

const LoginButtonLink = ({ link, name }) => (
  <StyledDiv>
    <A href={link}>{name}</A>
  </StyledDiv>
);

export default LoginButtonLink;
