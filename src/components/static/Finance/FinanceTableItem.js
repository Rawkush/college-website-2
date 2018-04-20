import React from 'react';
import styled from 'styled-components';
import { A } from 'theme/Components';
import media from 'theme/media';

const TD = styled.td`
  background-color: white;
  color: rgba(0, 0, 0, 0.81);
  padding: 14px 7px;
  text-decoration: none;
  font-weight: 400;
  ${({ title }) => (title ? 'width: 350px' : '')};
  ${media.phone`
    font-size: 14px;
    ${({ title }) => (title ? 'width: 250px' : '')};
  `};
`;

const TR = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export default ({ index, title, link }) => (
  <TR>
    <TD>{index}</TD>
    <TD title>{title}</TD>
    <TD>
      <A padding="0px" href={link} target="_blank" noMar>
        Download
      </A>
    </TD>
  </TR>
);
