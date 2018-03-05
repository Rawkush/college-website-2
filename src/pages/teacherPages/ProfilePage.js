import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//  Styled default components
import { Page } from './../../theme/Components';
import media from 'theme/media';

const B = styled(Link)`
  background: none;
  text-decoration: none;
  border: solid 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  padding: 5px 20px;
  color: rgba(0, 0, 0, 0.6);
  margin: 30px 0px;
  border-radius: 4px;
  transition: all 0.15s ease-in-out;
  border: solid 1px rgba(179, 0, 0, 0.7);
  color: rgba(179, 0, 0, 0.7);
  &:hover {
    color: white;
    background: rgba(179, 0, 0, 0.7);
  }
`;

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
        <B to="/teacher/addwork">Add Work </B>
        <B to="/teacher/addcommitte">Add Committe </B>
        <B to="/teacher/addNotification">Add Notification</B>
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
