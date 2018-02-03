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
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
