import React from 'react';
import { connect } from 'react-redux';

//  Component
import TimeTableList from './../../components/timeTable/timeTableList';

const TimeTablePage = ({ timeTableArray, match }) => (
  <div>
    <TimeTableList
      timeTableArray={timeTableArray.filter(
        (timeTable) => timeTable.semster === match.params.sem
      )}
      semester={match.params.semester}
    />
  </div>
);

const mapStateToProps = (state) => ({
  timeTableArray: state.timeTable,
});

export default connect(mapStateToProps)(TimeTablePage);
