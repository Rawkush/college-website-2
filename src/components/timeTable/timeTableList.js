import React from 'react';

//  Components
import TimeTableListItem from './timeTableListItem';

export default ({ timeTableArray, semester, isAdmin }) => (
  <div>
    <h2>{semester === 'odd' ? 'Odd Semester' : 'Even  Semester'}</h2>
    {timeTableArray
      .filter((timeTable) => timeTable.semester === semester)
      .map((timeTable) => (
        <TimeTableListItem auth={isAdmin} key={timeTable._id} {...timeTable} />
      ))}
  </div>
);
