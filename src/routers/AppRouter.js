import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AdminRoute from './AdminRoute';

// Components
import Header from './../components/header/Header';
import Footer from './../components/Footer/Footer';
import AdminNotifications from './../pages/adminPages/AdminNotifications';
import Syllabus from './../components/syllabus/SyllabusContainer';
import NotFound from './../components/notFound/NotFound';

// Pages
import HomePage from './../pages/publicPages/HomePage';
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
import TeacherLoginPage from './../pages/publicPages/TeacherLoginPage';
import TeacherProfilePage from './../pages/teacherPages/ProfilePage';
import EditTeacherProfilePage from './../pages/teacherPages/EditTeacherProfilePage';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/syllabus/:sub" component={Syllabus} />
        <Route path="/student/register" component={StudentRegistrationPage} />
        <Route path="/admin/login" component={AdminLoginPage} exact />
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
        <Route path="/admin/events" component={AdminEventsPage} exact />
        <Route path="/admin/events/add" component={AddEventsPage} exact />
        <Route path="/admin/events/edit/:_id" component={EditEventPage} exact />
        <Route path="/student/myprofile" component={StudentProfilePage} exact />
        <Route
          path="/student/myprofile/edit"
          component={ProfileEditPage}
          exact
        />
        <Route
          path="/student/myprofile/addaccomplishment"
          component={AddAccomplishmentPage}
          exact
        />
        <Route
          path="/student/myprofile/editaccomplishment/:_id"
          component={EditAccomplishmentPage}
          exact
        />
        <Route
          path="/student/myprofile/addproject"
          component={AddProjectPage}
          exact
        />
        <Route
          path="/student/myprofile/editproject/:_id"
          component={EditProjectPage}
          exact
        />
        <Route
          path="/student/myprofile/updatespecialisation"
          component={UpdateSpecialisationPage}
          exact
        />
        <Route
          path="/teacher/register"
          component={TeacherRegistrationPage}
          exact
        />
        <Route
          path="/teacher/addnotification"
          component={AddTeacherNotificationPage}
          exact
        />
        <Route
          path="/admin/registerteacher"
          component={TeacherRegistrationPage}
          exact
        />
        <Route
          path="/teacher/editprofile"
          component={EditTeacherProfilePage}
          exact
        />
        <Route path="/teacher/myprofile" component={TeacherProfilePage} exact />
        <Route path="/teacher/login" component={TeacherLoginPage} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
