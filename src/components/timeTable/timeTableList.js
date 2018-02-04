import React from 'react';

//  Components
import TimeTableListItem from './timeTableListItem';

export default ({ timeTableArray, semester }) => (
  <div>
    <h2>{semester === 'odd' ? 'Odd Semester' : 'Even  Semester'}</h2>
    {timeTableArray.map((timeTable) => (
      <TimeTableListItem key={timeTable.wef} {...timeTable} />
    ))}
  </div>
);
