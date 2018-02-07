import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//  Components
import StudentPhoto from './../../components/StudentDashboard/Photo';
import StudentPrimaryInfo from './../../components/StudentDashboard/PrimayInfo';
import LinksList from './../../components/StudentDashboard/LinksList';
import AccomplishmentsList from './../../components/StudentDashboard/AccomplishmentsList';
import ProjectList from './../../components/StudentDashboard/ProjectsList';
import SpecialisationList from './../../components/StudentDashboard/SpecialisationList';

const StudentProfilePage = ({ student, secondary }) => (
  <div>
    <h2>My Profile</h2>
    {student ? (
      <div>
        <StudentPhoto {...student} />
        <StudentPrimaryInfo {...student} />
        <LinksList {...student} />
        <AccomplishmentsList {...secondary} edit />
        <ProjectList {...secondary} edit />
        <SpecialisationList {...secondary} />
        <Link to="/student/myprofile/addaccomplishment">
          Add Accomplishment
        </Link>
        <Link to="/student/myprofile/addproject">Add Project</Link>
        <Link to="/student/myprofile/updatespecialisation">
          Add Specialisation
        </Link>
        <Link to="/student/myprofile/edit"> Edit Profile</Link>
      </div>
    ) : (
      <p>Loading ...</p>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  student: state.studentPrimary,
  secondary: state.studentSecondary,
});

export default connect(mapStateToProps)(StudentProfilePage);
