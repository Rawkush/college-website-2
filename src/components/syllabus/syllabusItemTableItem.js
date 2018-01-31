import React from 'react';

const SyllabusItemTableItem = ({
  codeNo,
  subject,
  file,
  l,
  tp,
  credits,
  status,
}) => (
  <tr>
    <td>{codeNo}</td>
    <td>
      <a href={file} target="_blank">
        {subject}
      </a>
    </td>
    <td>{l}</td>
    <td>{tp}</td>
    <td>{credits}</td>
    <td>{status}</td>
  </tr>
);

export default SyllabusItemTableItem;
