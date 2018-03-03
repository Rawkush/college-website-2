import React from 'react';
import { connect } from 'react-redux';
import {
  Page,
  H2,
  Container,
  FlexResponsiveStack,
  FlexHorizontal,
  Button,
  AlignCenter,
} from 'theme/Components';

import { startAdminLogout } from './../../actions/auth';
import Notifications from './../../components/adminDashboard/NotificationComponent';
import Syllabus from './../../components/adminDashboard/SyllabusComponent';
import Events from './../../components/adminDashboard/EventsComponent';
import Teacher from './../../components/adminDashboard/TeachersComponent';
import TimeTable from './../../components/adminDashboard/TimeTableComponent';

const AdminDashboardPage = ({ logout, history }) => (
  <Page>
    <Container>
      <H2 center>Admin Dashboard</H2>
      <FlexResponsiveStack>
        <FlexHorizontal>
          <Notifications />
          <TimeTable />
          <Events />
        </FlexHorizontal>
        <FlexHorizontal>
          <Syllabus />
          <Teacher />
        </FlexHorizontal>
      </FlexResponsiveStack>
      <AlignCenter m="0px 0px 20px 0px">
        <Button
          onClick={() => {
            logout().then(() => history.push('/'));
          }}
        >
          Log Out
        </Button>
      </AlignCenter>
    </Container>
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startAdminLogout()),
});

export default connect(undefined, mapDispatchToProps)(AdminDashboardPage);
