import React from 'react';

export default ({ technicalSkills }) => (
  <div>
    {technicalSkills ? (
      <div>
        <hr />
        <h4>technicalSkills</h4>
        {technicalSkills.map((technicalSkill) => (
          <p key={technicalSkill}>{technicalSkill}</p>
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
