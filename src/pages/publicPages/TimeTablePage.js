import React from 'react';
import { connect } from 'react-redux';

//  Component
// eslint-disable-next-line
import TimeTableList from 'components/timeTable/timeTableList';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const TimeTablePage = ({ timeTableArray, match, isAdmin }) => (
  <Page>
    <TimeTableList
      isAdmin={isAdmin}
      timeTableArray={timeTableArray.filter(
        (timeTable) => timeTable.semster === match.params.sem
      )}
      semester={match.params.semester}
    />
  </Page>
);

const mapStateToProps = (state) => ({
  timeTableArray: state.timeTable,
  isAdmin: state.auth.admin,
});

export default connect(mapStateToProps)(TimeTablePage);
