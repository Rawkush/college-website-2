import React from 'react';

import SyllabusListItemTable from './SyllabusListItemTable';

const SyllabusListItem = ({ syllabus }) => {
  const thoerySyllabus = syllabus.filter((item) => item.type === 'theory');
  const practicalSyllabus = syllabus.filter(
    (item) => item.type === 'practical'
  );

  return (
    <div>
      <h3>Theory</h3>
      <SyllabusListItemTable syllabus={thoerySyllabus} />
      <h3>Practical / Viva Voce</h3>
      <SyllabusListItemTable syllabus={practicalSyllabus} />
    </div>
  );
};

export default SyllabusListItem;
