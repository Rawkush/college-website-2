import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
import { A } from 'theme/Components';

const StyledA = styled.a`
  padding: 2px 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
  font-family: 'OpenSans', sans-serif;
  color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.3);
  }
`;

const LoginButtonLink = ({ link, name, SVG }) => (
  <StyledA href={link}>
    <SVG />
    {name}
  </StyledA>
);

export default LoginButtonLink;
