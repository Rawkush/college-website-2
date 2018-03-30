import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { A } from 'theme/Components';
import media from 'theme/media';

const TD = styled.td`
  background-color: white;
  color: rgba(0, 0, 0, 0.81);
  padding: 14px 7px;
  text-decoration: none;
  font-weight: 400;
  ${media.phone`
    font-size: 14px;
  `};
`;

const TR = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const SyllabusItemTableItem = ({
  codeNo,
  subject,
  file,
  l,
  tp,
  credits,
  status,
  _id,
  auth,
}) => (
  <TR>
    <TD>{codeNo}</TD>
    <TD>
      <A padding="0px" href={`/${file}`} target="_blank" noMar>
        {subject}
      </A>
    </TD>
    <TD>{l}</TD>
    <TD>{tp}</TD>
    <TD>{credits}</TD>
    <TD>{status}</TD>
    {!!auth && (
      <TD>
        <Link to={`/admin/syllabus/edit/${_id}`}>Edit</Link>
      </TD>
    )}
  </TR>
);

export default SyllabusItemTableItem;
