import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h2>Events</h2>
    <Link to="/events/cultural">Cultural</Link>
    <Link to="/events/sports">Sports</Link>
    <Link to="/events/tech">Tech</Link>
  </div>
);
