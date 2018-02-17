import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const AdminRoute = ({ isTeacher, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => {
      if (isTeacher) {
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
  isTeacher: state.auth.teacher,
});

export default connect(mapStateToProps)(AdminRoute);
