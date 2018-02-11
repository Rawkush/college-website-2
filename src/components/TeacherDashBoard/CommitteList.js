import React from 'react';

// Components
import CommitteListItem from './WorkListItem';

export default ({ committees }) => (
  <div>
    {committees ? (
      <div>
        <hr />
        <h4>Works</h4>
        {committees.map((committee) => (
          <CommitteListItem key={committee._id} {...committee} edit />
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
