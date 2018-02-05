import React from 'react';
import { connect } from 'react-redux';

//  Components
import StudentPhoto from './../../components/StudentDashboard/Photo';
import StudentPrimaryInfo from './../../components/StudentDashboard/PrimayInfo';
import LinksList from './../../components/StudentDashboard/LinksList';

const StudentProfilePage = ({ student }) => (
  <div>
    <StudentPhoto {...student} />
    <StudentPrimaryInfo {...student} />
    <LinksList {...student} />
  </div>
);

const mapStateToProps = (state) => ({
  student: state.studentPrimary,
});

export default connect(mapStateToProps)(StudentProfilePage);
