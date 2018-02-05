import React from 'react';

export default ({ url, provider }) => (
  <div>
    <a href={url}>{provider}</a>
  </div>
);
