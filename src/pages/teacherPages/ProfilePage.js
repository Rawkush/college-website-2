import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

//  Styled default components
import { Page, Container, ButtonLink } from './../../theme/Components';
import media from 'theme/media';

//  Components
import TeacherPhoto from './../../components/TeacherDashBoard/Photo';
import TeacherPrimaryInfo from './../../components/TeacherDashBoard/PrimaryInfo';
import WorkList from './../../components/TeacherDashBoard/WorkList';
import TechnicalList from './../../components/TeacherDashBoard/TechnicalList';
import CommitteList from './../../components/TeacherDashBoard/CommitteList';
import SpecialisationList from './../../components/TeacherDashBoard/SpecialistionList';
import EducationList from './../../components/TeacherDashBoard/EducationList';
import NotificationList from './../../components/TeacherDashBoard/NotificationList';

//  Actions
import { startTeacherLogout } from './../../actions/teacherPrimary';

// eslint-disable-next-line


const StudentProfilePage = ({ teacher, history, secondary, logout }) => (
  <Page>
    <h2>My Profile</h2>
    {teacher ? (
      <div>
        {/* {teacher.name ? '' : history.push('/teacher/editprofile')} */}
        <Link to="/teacher/editprofile">Edit Profile</Link>
        <TeacherPhoto {...teacher} />
        <TeacherPrimaryInfo {...teacher} />
        <EducationList {...secondary} />
        <WorkList {...secondary} edit />
        <TechnicalList {...secondary} edit />
        <CommitteList {...secondary} edit />
        <SpecialisationList {...secondary} />
        <NotificationList {...secondary} />
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
  </Page>
);

const mapStateToProps = (state) => ({
  teacher: state.teacherPrimary,
  secondary: state.teacherSecondary,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startTeacherLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfilePage);
