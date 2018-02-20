import React from 'react';

// Components
import AccomplishmentsListItem from './AccomplishmentsListItem';

export default ({ accomplishments } = {}) => (
  <div>
    {accomplishments ? (
      <div>
        <hr />
        <h4>Accomplishments</h4>
        {accomplishments.map((accomplishment) => (
          <AccomplishmentsListItem
            key={accomplishment._id}
            {...accomplishment}
            edit
          />
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
