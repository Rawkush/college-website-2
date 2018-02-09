import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//  Components

const StudentProfilePage = ({ teacher, history }) => (
  <div>
    {teacher.name ? '' : history.push('/teacher/editprofile')}
    <h2>My Profile</h2>
    {teacher ? (
      <div>
        <Link to="/teacher/editprofile">Edit Profile</Link>
      </div>
    ) : (
      <p>Loading ...</p>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  teacher: state.teacherPrimary,
  secondary: state.teacherSecondary,
});

export default connect(mapStateToProps)(StudentProfilePage);
