import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
import { Page } from 'theme/Components';

export default () => (
  <div>
    <Page>
      <h2>Events</h2>
      <Link to="/events/cultural">Cultural</Link>
      <Link to="/events/sports">Sports</Link>
      <Link to="/events/tech">Tech</Link>
    </Page>
  </div>
);
