import React from 'react';

export default ({ education }) => (
  <div>
    <h2>Education</h2>
    {education.map((elem) => <p key={elem}>{elem}</p>)}
  </div>
);
