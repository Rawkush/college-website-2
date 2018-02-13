import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//  Actions
import { startStudentLogout } from './../../actions/studentPrimary';
import { startMarkNotificationAsRead as startMarkAsRead } from './../../actions/studentSecondary';

//  Components
import StudentPhoto from './../../components/StudentDashboard/Photo';
import StudentPrimaryInfo from './../../components/StudentDashboard/PrimayInfo';
import LinksList from './../../components/StudentDashboard/LinksList';
import AccomplishmentsList from './../../components/StudentDashboard/AccomplishmentsList';
import ProjectList from './../../components/StudentDashboard/ProjectsList';
import SpecialisationList from './../../components/StudentDashboard/SpecialisationList';
import NotificationList from './../../components/StudentDashboard/NotificationList';

const StudentProfilePage = ({
  student,
  secondary,
  markAsRead,
  logout,
  history,
}) => (
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
        <NotificationList {...secondary} markAsRead={markAsRead} />
        <Link to="/student/myprofile/addaccomplishment">
          Add Accomplishment
        </Link>
        <Link to="/student/myprofile/addproject">Add Project</Link>
        <Link to="/student/myprofile/updatespecialisation">
          Add Specialisation
        </Link>
        <Link to="/student/myprofile/edit"> Edit Profile</Link>
        <button
          onClick={() => {
            logout().then(() => history.push('/'));
          }}
        >
          Logout
        </button>
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

const mapDispatchToProps = (dispatch) => ({
  markAsRead: (_id) => dispatch(startMarkAsRead(_id)),
  logout: () => dispatch(startStudentLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfilePage);
