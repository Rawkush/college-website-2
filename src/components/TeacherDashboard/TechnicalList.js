import React from 'react';

// Components
import TechnicalListItem from './TechnicalListItem';

export default ({ technicalSkills }) => (
  <div>
    {technicalSkills ? (
      <div>
        <hr />
        <h4>technicalSkills</h4>
        {technicalSkills.map((technicalSkill) => (
          <TechnicalListItem
            key={technicalSkill._id}
            {...technicalSkill}
            edit
          />
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
