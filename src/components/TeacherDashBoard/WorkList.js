import React from 'react';

// Components
import WorkListItem from './WorkListItem';

export default ({ work }) => (
  <div>
    {work ? (
      <div>
        <hr />
        <h4>Works</h4>
        {work.map((workElem) => (
          <WorkListItem key={workElem._id} {...workElem} edit />
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
