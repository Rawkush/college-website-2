import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Components
import Header from 'components/header/Header';
import Footer from 'components/Footer/Footer';
import NotFound from 'components/notFound/NotFound';
import ScrollTop from 'components/ScrollTop';

//  Protected Routes
import TeacherRoute from './TeacherRoute';
import StudentRoute from './StudentRoute';
import AdminRoute from './AdminRoute';

//  Admin Pages
import AddSyllabusPage from './../pages/adminPages/AddSyllabusPage';
import AdminDashboardPage from './../pages/adminPages/AdminDashboardPage';
import EditNotificationPage from './../pages/adminPages/EditNotificaitonPage';
import AddNotificationPage from './../pages/adminPages/AddNotificationPage';
import EditSyllabusPage from './../pages/adminPages/EditSyllabusPage';
import AdminTimeTablePage from './../pages/adminPages/AdminTimeTablePage';
import AddTimeTablePage from './../pages/adminPages/AddTimeTablePage';
import EditTimeTablePage from './../pages/adminPages/EditTimeTablePage';
import AddEventsPage from './../pages/adminPages/AddEventsPage';
import AdminEventsPage from './../pages/adminPages/AdminEventsPage';
import EditEventPage from './../pages/adminPages/EditEventPage';
import TeacherListPage from './../pages/adminPages/TeachersListPage';
import TeacherRegistrationPage from './../pages/adminPages/AddTeacherPage';

// Student Pages
import StudentProfilePage from './../pages/studentPages/ProfilePage';
import ProfileEditPage from './../pages/studentPages/ProfileEditPage';
import AddAccomplishmentPage from './../pages/studentPages/AddAccomplishmentPage';
import EditAccomplishmentPage from './../pages/studentPages/EditAccomplishmentPage';
import AddProjectPage from './../pages/studentPages/AddProjectPage';
import EditProjectPage from './../pages/studentPages/EditProjectPage';
import UpdateSpecialisationPage from './../pages/studentPages/AddSpecialisationPage';
import StudentNotificationPage from './../pages/studentPages/StudentNotificationPage';

//  Teacher Pages
import AddTeacherNotificationPage from './../pages/teacherPages/AddNotificationPage';
import TeacherProfilePage from './../pages/teacherPages/ProfilePage';
import EditTeacherProfilePage from './../pages/teacherPages/EditTeacherProfilePage';
import AddWorkPage from './../pages/teacherPages/AddWorkPage';
import AddTechnicalSkillsPage from './../pages/teacherPages/AddTechnicalSkillsPage';
import AddCommittePage from './../pages/teacherPages/AddCommittePage';
import AddSpecialisationPage from './../pages/teacherPages/AddSpecialisationPage';
import AddEductionPage from './../pages/teacherPages/AddEductionPage';
import EditWorkPage from './../pages/teacherPages/EditWorkPage';
import EditCommitteePage from './../pages/teacherPages/EditCommittePage';
import EditNotificaitonPage from './../pages/teacherPages/EditNotificationPags';
import TeacherLoginPage from './../pages/teacherPages/TeahcersLoginPage';
import TeacherNotificationPage from './../pages/teacherPages/NotificationPage';

//  Public Pages
import Syllabus from './../pages/publicPages/SyllabusPage';
import NotificationPage from './../pages/publicPages/NotificationPage';
import HomePage from './../pages/publicPages/HomePage';
import StudentLoginPage from './../pages/publicPages/StudentLoginPage';
import SearchPage from './../pages/publicPages/SearchPage';
import ProfilePage from './../pages/publicPages/ProfilePage';
import EventPage from './../pages/publicPages/EventPage';
import ShiningStarPage from './../pages/publicPages/ShiningStarPage';
import StudentRegistrationPage from './../pages/publicPages/StudentRegistrationPage';
import AdminLoginPage from './../pages/publicPages/AdminLoginPage';
import TimeTablePage from './../pages/publicPages/TimeTablePage';
import EventsOptionPage from './../pages/publicPages/EventsOptionPage';
import EventsPage from './../pages/publicPages/EventsPage';
import DepartmentsPage from './../pages/publicPages/DepartmentsPage';
import LoginPage from './../pages/publicPages/LoginPage';
import ScholarShipsPage from './../pages/publicPages/Scholarships';
import FinancePage from './../pages/publicPages/FinancePage';
import DisclaimerPage from './../pages/publicPages/DisclaimerPage';
import ContactPage from './../pages/publicPages/ContactUsPage';
import Library from './../pages/publicPages/Library';
import Acadmics from './../pages/publicPages/AcademicsPage';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <ScrollTop>
      <Header />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition timeout={300} classNames="fade" key={location.key}>
              <Switch location={location}>
                <AdminRoute
                  path="/admin/dashboard"
                  component={AdminDashboardPage}
                  exact
                />
                <AdminRoute
                  path="/admin/notifications/edit/:_id"
                  component={EditNotificationPage}
                  exact
                />
                <AdminRoute
                  path="/admin/notifications/add"
                  component={AddNotificationPage}
                  exact
                />
                <AdminRoute
                  path="/admin/teacher"
                  component={TeacherListPage}
                  exact
                />
                <AdminRoute
                  path="/admin/syllabus/add"
                  component={AddSyllabusPage}
                  exact
                />
                <AdminRoute
                  path="/admin/syllabus/edit/:_id"
                  component={EditSyllabusPage}
                  exact
                />
                <AdminRoute
                  path="/admin/timetable"
                  component={AdminTimeTablePage}
                  exact
                />
                <AdminRoute
                  path="/admin/timetable/add"
                  component={AddTimeTablePage}
                  exact
                />
                <AdminRoute
                  path="/admin/timetable/edit/:_id"
                  component={EditTimeTablePage}
                  exact
                />
                <AdminRoute
                  path="/admin/events"
                  component={AdminEventsPage}
                  exact
                />
                <AdminRoute
                  path="/admin/events/add"
                  component={AddEventsPage}
                  exact
                />
                <AdminRoute
                  path="/admin/events/edit/:_id"
                  component={EditEventPage}
                  exact
                />
                <AdminRoute
                  path="/admin/registerteacher"
                  component={TeacherRegistrationPage}
                  exact
                />
                <StudentRoute
                  path="/student/myprofile"
                  component={StudentProfilePage}
                  exact
                />
                <StudentRoute
                  path="/student/myprofile/edit"
                  component={ProfileEditPage}
                  exact
                />
                <StudentRoute
                  path="/student/myprofile/addaccomplishment"
                  component={AddAccomplishmentPage}
                  exact
                />
                <StudentRoute
                  path="/student/myprofile/editaccomplishment/:_id"
                  component={EditAccomplishmentPage}
                  exact
                />
                <StudentRoute
                  path="/student/myprofile/addproject"
                  component={AddProjectPage}
                  exact
                />
                <StudentRoute
                  path="/student/myprofile/editproject/:_id"
                  component={EditProjectPage}
                  exact
                />
                <StudentRoute
                  path="/student/myprofile/updatespecialisation"
                  component={UpdateSpecialisationPage}
                  exact
                />
                <StudentRoute
                  path="/student/notification"
                  component={StudentNotificationPage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/addnotification"
                  component={AddTeacherNotificationPage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/editprofile"
                  component={EditTeacherProfilePage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/myprofile"
                  component={TeacherProfilePage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/addwork"
                  component={AddWorkPage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/addcommitte"
                  component={AddCommittePage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/addeducation"
                  component={AddEductionPage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/addtechnicalskill"
                  component={AddTechnicalSkillsPage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/addspecialisation"
                  component={AddSpecialisationPage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/editwork/:_id"
                  component={EditWorkPage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/editcommittee/:_id"
                  component={EditCommitteePage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/notification/edit/:_id"
                  component={EditNotificaitonPage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/login"
                  component={TeacherLoginPage}
                  exact
                />
                <TeacherRoute
                  path="/teacher/notification"
                  component={TeacherNotificationPage}
                  exact
                />
                <Route path="/" component={HomePage} exact />
                <Route
                  path="/notification"
                  component={NotificationPage}
                  exact
                />
                <Route path="/syllabus/:period/:sub" component={Syllabus} />
                <Route
                  path="/student/register"
                  component={StudentRegistrationPage}
                />
                <Route path="/login" component={LoginPage} exact />
                <Route path="/admin/login" component={AdminLoginPage} exact />
                <Route
                  path="/student/login"
                  component={StudentLoginPage}
                  exact
                />
                <Route path="/timetable/:semester" component={TimeTablePage} />
                <Route path="/department/:branch" component={DepartmentsPage} />
                <Route path="/events" component={EventsOptionPage} exact />
                <Route path="/events/:type" component={EventsPage} exact />
                <Route path="/event/:_id" component={EventPage} exact />
                <Route path="/search" component={SearchPage} />
                <Route path="/shinigsstars" component={ShiningStarPage} />
                <Route path="/student/:slugg" component={ProfilePage} />
                <Route path="/scholarships" component={ScholarShipsPage} />
                <Route path="/budgetreport" component={FinancePage} />
                <Route path="/disclaimer" component={DisclaimerPage} />
                <Route path="/contactus" component={ContactPage} />
                <Route path="/library" component={Library} />
                <Route path="/acadmics" component={Acadmics} />
                <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <Footer />
    </ScrollTop>
  </BrowserRouter>
);

export default AppRouter;
