import React from 'react';

//  Components
import TimeTableListItem from './TimeTableListItem';

export default ({ timeTableArray, semester, auth }) => (
  <div>
    <h2>{semester === 'odd' ? 'Odd Semester' : 'Even  Semester'}</h2>
    {timeTableArray
      .filter((timeTable) => timeTable.semester === semester)
      .map((timeTable) => (
        <TimeTableListItem auth={auth} key={timeTable._id} {...timeTable} />
      ))}
  </div>
);
