import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//  Styled default components
import media from 'theme/media';
import { Page, Container, ButtonLink, Wrapper } from 'theme/Components';

//  Components
import TeacherPhoto from './../../components/TeacherDashBoard/Photo';
import TeacherPrimaryInfo from './../../components/TeacherDashBoard/PrimaryInfo';
import WorkList from './../../components/TeacherDashBoard/WorkList';
import TechnicalList from './../../components/TeacherDashBoard/TechnicalList';
import CommitteList from './../../components/TeacherDashBoard/CommitteList';
import SpecialisationList from './../../components/TeacherDashBoard/SpecialistionList';
import EducationList from './../../components/TeacherDashBoard/EducationList';

//  Actions
import { startTeacherLogout } from './../../actions/teacherPrimary';
import { setTeacherSecondary } from './../../actions/teacherSecondary';

const Wrapper1 = styled.div`
  display: flex;
  padding: 25px 0px 0px 0px;
  align-items: center;
  ${media.phone`
    flex-direction: column;
  `};
`;
const WrapperEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  ${media.phone`
    justify-content: ${({ center }) => (center ? 'center' : 'flex-end')};
  `};
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
  ${media.phone`
    padding: 30px 0px;
  `};
`;

const Background = styled.div`
  background: #efefef;
  padding-bottom: 10px;
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

const PageMod = Page.extend`
  ${media.phone`
    margin-top: 68px;
  `};
`;

const StudentProfilePage = ({
  teacher,
  history,
  secondary,
  setSecondary,
  logout,
}) => (
  <PageMod>
    {teacher ? (
      <div>
        <Background>
          <Container>
            <Wrapper1>
              <TeacherPhoto {...teacher} />
              <TeacherPrimaryInfo {...teacher} />
            </Wrapper1>
            <WrapperEnd center>
              <ButtonLink to="/teacher/editprofile">Edit Profile</ButtonLink>
              <Button
                onClick={() => {
                  logout().then(() => {
                    setSecondary();
                    history.push('/');
                  });
                }}
              >
                Logout
              </Button>
            </WrapperEnd>
          </Container>
        </Background>
        <Wrapper center padding="20px 0px 0px 0px">
          <ButtonLink to="/teacher/notification">View Notifications</ButtonLink>
          <ButtonLink m="0px 0px 0px 20px" to="/teacher/addNotification">
            Add Notification
          </ButtonLink>
        </Wrapper>
        <Container>
          <EducationList {...secondary} />
          <TechnicalList {...secondary} edit />
          <SpecialisationList {...secondary} />
          <WorkList {...secondary} edit />
          <CommitteList {...secondary} edit />
          {/* <NotificationList {...secondary} /> */}
          <Wrapper2>
            <ButtonLink to="/teacher/addwork">Add Work </ButtonLink>
            <ButtonLink to="/teacher/addcommitte">Add Committe </ButtonLink>
          </Wrapper2>
        </Container>
      </div>
    ) : (
      <p>Loading ...</p>
    )}
  </PageMod>
);

const mapStateToProps = (state) => ({
  teacher: state.teacherPrimary,
  secondary: state.teacherSecondary,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startTeacherLogout()),
  setSecondary: () =>
    dispatch(
      setTeacherSecondary({
        notifications: [],
        work: [],
        education: [],
        specialisation: [],
        technicalSkills: [],
        committee: [],
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfilePage);
