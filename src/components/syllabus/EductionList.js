import React from 'react';

export default ({ eduction }) => (
  <div>
    <h2>Specialisation</h2>
    {eduction.map((elem) => <p key={elem}>{elem}</p>)}
  </div>
);
