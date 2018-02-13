import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const AdminRoute = ({ isStudent, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => {
      if (isStudent) {
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
  isStudent: state.auth.student,
});

export default connect(mapStateToProps)(AdminRoute);
