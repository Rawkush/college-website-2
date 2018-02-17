import React from 'react';
import { connect } from 'react-redux';

//  Component
import TimeTableList from './../../components/timeTable/TimeTableList';

const TimeTablePage = ({ timeTableArray, match, isAdmin }) => (
  <div>
    <TimeTableList
      isAdmin={isAdmin}
      timeTableArray={timeTableArray.filter(
        (timeTable) => timeTable.semster === match.params.sem
      )}
      semester={match.params.semester}
    />
  </div>
);

const mapStateToProps = (state) => ({
  timeTableArray: state.timeTable,
  isAdmin: state.auth.admin,
});

export default connect(mapStateToProps)(TimeTablePage);
