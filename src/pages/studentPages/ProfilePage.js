import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//  Components
import StudentPhoto from './../../components/StudentDashboard/Photo';
import StudentPrimaryInfo from './../../components/StudentDashboard/PrimayInfo';
import LinksList from './../../components/StudentDashboard/LinksList';

const StudentProfilePage = ({ student }) => (
  <div>
    <StudentPhoto {...student} />
    <StudentPrimaryInfo {...student} />
    <LinksList {...student} />
    <Link to="/student/myprofile/edit"> Edit Profile</Link>
  </div>
);

const mapStateToProps = (state) => ({
  student: state.studentPrimary,
});

export default connect(mapStateToProps)(StudentProfilePage);
