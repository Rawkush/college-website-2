import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Route restrictions
import AdminRoute from './AdminRoute';
import StudentRoute from './StudentRoute';
import TeacherRoute from './TeacherRoute';

// Components
import Header from './../components/header/Header';
import Footer from './../components/Footer/Footer';
import AdminNotifications from './../pages/adminPages/AdminNotifications';
import Syllabus from './../components/syllabus/syllabusContainer';
import NotFound from './../components/notFound/NotFound';

// Public Pages
import HomePage from './../pages/publicPages/HomePage';
import NotificationPage from './../pages/publicPages/NotificationPage';
import StudentLoginPage from './../pages/publicPages/StudentLoginPage';

// Pages
import AddSyllabusPage from './../pages/adminPages/AddSyllabusPage';
import StudentRegistrationPage from './../pages/publicPages/StudentRegistrationPage';
import AdminLoginPage from '../pages/publicPages/AdminLoginPage';
import AdminDashboardPage from './../pages/adminPages/AdminDashboardPage';
import EditNotificationPage from '../pages/adminPages/EditNotificaitonPage';
import AddNotificationPage from './../pages/adminPages/AddNotificationPage';
import AdminSyllabusPage from './../pages/adminPages/AdminSyllabusPage';
import EditSyllabusPage from './../pages/adminPages/EditSyllabusPage';
import AdminTimeTablePage from './../pages/adminPages/AdminTimeTablePage';
import AddTimeTablePage from './../pages/adminPages/AddTimeTablePage';
import TimeTablePage from './../pages/publicPages/TimeTablePage';
import EditTimeTablePage from './../pages/adminPages/EditTimeTablePage';
import AddEventsPage from './../pages/adminPages/AddEventsPage';
import AdminEventsPage from './../pages/adminPages/AdminEventsPage';
import EditEventPage from './../pages/adminPages/EditEventPage';
import EventsOptionPage from './../pages/publicPages/EventsOptionPage';
import EventsPage from './../pages/publicPages/EventsPage';
import TeacherRegistrationPage from './../pages/adminPages/AddTeacherPage';

// Student Page
import StudentProfilePage from './../pages/studentPages/ProfilePage';
import ProfileEditPage from './../pages/studentPages/ProfileEditPage';
import AddAccomplishmentPage from './../pages/studentPages/AddAccomplishmentPage';
import EditAccomplishmentPage from './../pages/studentPages/EditAccomplishmentPage';
import AddProjectPage from './../pages/studentPages/AddProjectPage';
import EditProjectPage from './../pages/studentPages/EditProjectPage';
import UpdateSpecialisationPage from './../pages/studentPages/AddSpecialisationPage';

// Teachers Page
// import TeacherRegistrationPage from './../pages/publicPages/TeacherRegistrationPage';
import AddTeacherNotificationPage from './../pages/teacherPages/AddNotificationPage';
import LoginPage from './../pages/publicPages/LoginPage';
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

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/notification" component={NotificationPage} exact />
        <Route path="/syllabus/:period/:sub" component={Syllabus} />
        <Route path="/student/register" component={StudentRegistrationPage} />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/admin/login" component={AdminLoginPage} exact />
        <Route path="/student/login" component={StudentLoginPage} exact />
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
          path="/admin/notifications"
          component={AdminNotifications}
          exact
        />
        <AdminRoute
          path="/admin/notifications/add"
          component={AddNotificationPage}
          exact
        />
        <AdminRoute
          path="/admin/syllabus"
          component={AdminSyllabusPage}
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
        <Route path="/timetable/:semester" component={TimeTablePage} />
        <AdminRoute
          path="/admin/timetable/edit/:_id"
          component={EditTimeTablePage}
          exact
        />
        <Route path="/events" component={EventsOptionPage} exact />
        <Route path="/events/:type" component={EventsPage} exact />
        <AdminRoute path="/admin/events" component={AdminEventsPage} exact />
        <AdminRoute path="/admin/events/add" component={AddEventsPage} exact />
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
        <Route
          path="/teacher/register"
          component={TeacherRegistrationPage}
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
        <TeacherRoute path="/teacher/addwork" component={AddWorkPage} exact />
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
          path="/teacher/editnotification/:_id"
          component={EditNotificaitonPage}
          exact
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
