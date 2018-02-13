import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Footer = ({ isAdminLoggedIn }) => (
  <div>{!isAdminLoggedIn && <Link to="/admin/login">Admin Login</Link>}</div>
);

const mapStateToProps = (state) => ({
  isAdminLoggedIn: state.auth.admin,
});

export default connect(mapStateToProps)(Footer);
