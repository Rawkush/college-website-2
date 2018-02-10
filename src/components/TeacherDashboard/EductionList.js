import React from 'react';

export default ({ eduction }) => (
  <div>
    <h2>Eduction</h2>
    {eduction.map((elem) => <p key={elem}>{elem}</p>)}
  </div>
);
