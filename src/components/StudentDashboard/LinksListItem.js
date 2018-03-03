import React from 'react';

import { A } from 'theme/Components';

export default ({ url, provider } = {}) => (
  <A target="_black" href={url}>
    {provider}
  </A>
);
