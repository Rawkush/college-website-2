import React from 'react';
import { connect } from 'react-redux';

//  Component
import TimeTableList from './../../components/timeTable/TimeTableList';

const TimeTablePage = ({ timeTableArray, match, auth }) => (
  <div>
    <TimeTableList
      auth={auth}
      timeTableArray={timeTableArray.filter(
        (timeTable) => timeTable.semster === match.params.sem
      )}
      semester={match.params.semester}
    />
  </div>
);

const mapStateToProps = (state) => ({
  timeTableArray: state.timeTable,
  auth: state.admin.auth,
});

export default connect(mapStateToProps)(TimeTablePage);
