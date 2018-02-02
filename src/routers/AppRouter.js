import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AdminRoute from './AdminRoute';

import Header from './../components/header/Header';
import Footer from './../components/Footer/Footer';

import Syllabus from './../components/syllabus/SyllabusContainer';
import NotFound from './../components/notFound/NotFound';
import HomePage from './../pages/publicPages/HomePage';
import StudentRegistrationPage from './../pages/publicPages/StudentRegistrationPage';
import AdminLoginPage from '../pages/publicPages/AdminLoginPage';
import AdminDashboardPage from './../pages/adminPages/AdminDashboardPage';
import EditNotificationPage from '../pages/adminPages/EditNotificaitonPage';
import AdminNotifications from './../pages/adminPages/AdminNotifications';
import AddNotificationPage from './../pages/adminPages/AddNotificationPage';

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
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
