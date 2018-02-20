import React from 'react';

export default ({ specialisation } = {}) => (
  <div>
    <h2>Specialisation</h2>
    {specialisation ? (
      specialisation.map((elem) => <p key={elem}>{elem}</p>)
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
