import React from 'react';

export default ({ photo }) => (
  <div>{photo ? <img src={photo} alt="Teacher" /> : <p>No Photo</p>}</div>
);
