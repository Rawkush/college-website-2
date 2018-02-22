import React from 'react';

// Components
import LinksListItem from './LinksListItem';

export default ({ linkedProfiles } = {}) => (
  <div>
    {linkedProfiles ? (
      <div>
        {linkedProfiles.map((linkedProfile) => (
          <LinksListItem key={linkedProfile._id} {...linkedProfile} />
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);