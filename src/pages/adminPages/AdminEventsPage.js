import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components

const AdminEventsPage = () => (
  <div>
    <h1>Events</h1>
    <Link to="/events/sports"> Sports Events</Link>
    <Link to="/events/cultural"> Cultural Events</Link>
    <Link to="/events/tech"> Events Events</Link>
    <Link to="/admin/events/add"> Add Events</Link>
  </div>
);

const mapStateToProps = (state) => ({
  auth: state.auth.admin,
});

export default connect(mapStateToProps)(AdminEventsPage);
