import React from 'react';
import { H2ResAuto } from 'theme/Components';

//  Components
import TimeTableListItem from './timeTableListItem';

export default ({ timeTableArray, semester, isAdmin }) => (
  <div>
    <H2ResAuto>
      {semester === 'odd' ? 'Odd Semester' : 'Even  Semester'}
    </H2ResAuto>
    {timeTableArray
      .filter((timeTable) => timeTable.semester === semester)
      .map((timeTable) => (
        <TimeTableListItem auth={isAdmin} key={timeTable._id} {...timeTable} />
      ))}
  </div>
);
