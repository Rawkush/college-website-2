import React from 'react';
import { Link } from 'react-router-dom';

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
    {!!auth && (
      <td>
        <Link to={`/admin/syllabus/edit/${_id}`}>Edit</Link>
      </td>
    )}
  </tr>
);

export default SyllabusItemTableItem;
