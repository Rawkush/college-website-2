import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startAdminLogout } from './../../actions/auth';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const AdminDashboardPage = ({ logout, history }) => (
  <Page>
    <h1>Admin Dashboard</h1>
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
  </Page>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startAdminLogout()),
});

export default connect(undefined, mapDispatchToProps)(AdminDashboardPage);
