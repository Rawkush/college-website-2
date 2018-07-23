import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, Wrapper } from 'theme/Components';

//  Component
import TimeTableList from 'components/timeTable/timeTableList';

const TimeTablePage = ({ timeTableArray, match, isAdmin }) => (
  <Page>
    <Container>
      <Wrapper>
        <TimeTableList
          isAdmin={isAdmin}
          timeTableArray={timeTableArray.filter(
            (timeTable) => timeTable.semster === match.params.sem
          )}
          semester={match.params.semester}
        />
      </Wrapper>
    </Container>
  </Page>
);

const mapStateToProps = (state) => ({
  timeTableArray: state.timeTable,
  isAdmin: state.auth.admin,
});

export default connect(mapStateToProps)(TimeTablePage);
