import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startAdminLogout } from './../../actions/auth';

import { Page, H2, Container } from 'theme/Components';

const AdminDashboardPage = ({ logout, history }) => (
  <Page>
    <Container>
      <H2 center>Admin Dashboard</H2>
      <Link to="/admin/notifications"> Notifications </Link>
      <Link to="/admin/events"> Events </Link>
      <Link to="/admin/timetable"> Time Table </Link>
      <Link to="/admin/syllabus"> Syllabus </Link>
      <Link to="/admin/registerteacher"> Register Teacher </Link>
      <button
        onClick={() => {
          logout().then(() => history.push('/'));
        }}
      >
        Log Out
      </button>
    </Container>
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startAdminLogout()),
});

export default connect(undefined, mapDispatchToProps)(AdminDashboardPage);
