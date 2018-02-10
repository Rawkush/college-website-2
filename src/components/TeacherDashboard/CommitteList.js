import React from 'react';

// Components
import CommitteListItem from './WorkListItem';

export default ({ committes }) => (
  <div>
    {committes ? (
      <div>
        <hr />
        <h4>Works</h4>
        {committes.map((committe) => ( <CommitteListItem key={committe._id} {...committe} edit /> ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
