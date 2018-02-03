import React from 'react';

import SyllabusItemTableItem from './SyllabusItemTableItem';

const SyllabusItemTable = ({ syllabus, auth }) => (
  <div>
    <table>
      <tbody>
        <tr>
          <th>Code no.</th>
          <th>Subject</th>
          <th>L</th>
          <th>T/P</th>
          <th>Credits</th>
          <th>Status</th>
        </tr>
      </tbody>
      <tbody>
        {syllabus.map((item) => (
          <SyllabusItemTableItem key={item.codeNo} {...item} auth={auth} />
        ))}
      </tbody>
    </table>
  </div>
);

export default SyllabusItemTable;
