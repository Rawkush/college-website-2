import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const AdminRoute = ({ isAdmin, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => {
      if (isAdmin) {
        return (
          <div>
            <Component {...props} />
          </div>
        );
      }
      return (
        <div>
          <h1>Access Denied</h1>
        </div>
      );
    }}
  />
);

const mapStateToProps = (state) => ({
  isAdmin: state.auth.admin,
});

export default connect(mapStateToProps)(AdminRoute);
