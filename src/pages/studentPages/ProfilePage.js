import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//  Styled default components
import { Page, Container, ButtonLink } from 'theme/Components';
import media from 'theme/media';

//  Actions
import { startStudentLogout } from './../../actions/studentPrimary';
import {
  startMarkNotificationAsRead as startMarkAsRead,
  setStudentSecondary,
} from './../../actions/studentSecondary';

import { WrapperEnd } from './../../components/StudentDashboard/Shared.styles';

//  Components
import StudentPhoto from './../../components/StudentDashboard/Photo';
import StudentPrimaryInfo from './../../components/StudentDashboard/PrimayInfo';
import LinksList from './../../components/StudentDashboard/LinksList';
import AccomplishmentsList from './../../components/StudentDashboard/AccomplishmentsList';
import ProjectList from './../../components/StudentDashboard/ProjectsList';
import SpecialisationList from './../../components/StudentDashboard/SpecialisationList';
// import NotificationList from './../../components/StudentDashboard/NotificationList';

const Background = styled.div`
  background: #efefef;
  padding-bottom: 10px;
`;

const Wrapper1 = styled.div`
  display: flex;
  padding: 25px 0px 0px 0px;
  align-items: center;
  ${media.phone`
    flex-direction: column;
  `};
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
`;

const Button = styled.button`
  color: rgba(0, 0, 0, 0.8);
  background: none;
  padding: 4px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.22);
  transition: all 0.1s;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    background: #c14545;
    color: #fff;
    border: 1px solid #c14545;
  }

  ${media.phone`
    padding: 4px 12px;
    font-size: 4vw;
  `};
`;

const StudentProfilePage = ({
  student,
  secondary,
  // markAsRead,
  logout,
  history,
}) => (
  <Page mt="68px">
    <Background>
      <Container>
        <Wrapper1>
          <StudentPhoto {...student} />
          <StudentPrimaryInfo {...student} />
        </Wrapper1>
        <LinksList {...student} />
        <WrapperEnd center>
          <ButtonLink to="/student/myprofile/edit"> Edit Profile</ButtonLink>
          <Button
            onClick={() => {
              logout().then(() => history.push('/'));
            }}
          >
            Logout
          </Button>
        </WrapperEnd>
      </Container>
    </Background>
    <Container>
      {student ? (
        <div>
          <SpecialisationList {...secondary} />
          <AccomplishmentsList {...secondary} edit />
          <ProjectList {...secondary} edit />
          {/* <NotificationList {...secondary} markAsRead={markAsRead} /> */}
          <Wrapper2>
            <ButtonLink to="/student/myprofile/addaccomplishment">
              Add Accomplishment
            </ButtonLink>
            <ButtonLink to="/student/myprofile/addproject">
              Add Project
            </ButtonLink>
          </Wrapper2>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </Container>
  </Page>
);

const mapStateToProps = (state) => ({
  student: state.studentPrimary,
  secondary: state.studentSecondary,
});

const mapDispatchToProps = (dispatch) => ({
  markAsRead: (_id) => dispatch(startMarkAsRead(_id)),
  logout: () => {
    dispatch(startStudentLogout());
    dispatch(setStudentSecondary({}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfilePage);
