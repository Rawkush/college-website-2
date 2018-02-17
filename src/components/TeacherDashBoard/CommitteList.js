import React from 'react';

// Components
import CommitteeListItem from './CommitteeListItem';

export default ({ committee }) => (
  <div>
    {committee ? (
      <div>
        <hr />
        <h4>Committee - </h4>
        {committee.map((elem) => (
          <CommitteeListItem key={elem._id} {...elem} edit />
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
