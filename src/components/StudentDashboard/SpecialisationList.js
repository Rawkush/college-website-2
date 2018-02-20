import React from 'react';

export default ({ specialisation } = {}) => (
  <div>
    <h2>Specialisation</h2>
    {specialisation.map((elem) => <p key={elem}>{elem}</p>)}
  </div>
);
