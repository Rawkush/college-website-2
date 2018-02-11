import React from 'react';

// Components
import WorkListItem from './WorkListItem';

export default ({ works }) => (
  <div>
    {works ? (
      <div>
        <hr />
        <h4>Works</h4>
        {works.map((work) => ( <WorkListItem key={work._id} {...work} edit /> ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
