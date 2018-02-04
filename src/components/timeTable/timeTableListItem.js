import React from 'react';
import moment from 'moment';

export default ({ title, wef, file }) => (
  <div>
    <p>
      <a href={file}>{title}</a>
    </p>
    <p>{moment(wef).format('DD MMM, YYYY')}</p>
  </div>
);
