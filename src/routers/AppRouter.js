import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from './../components/header/Header';
import Footer from './../components/Footer/Footer';

import Syllabus from './../components/syllabus/SyllabusContainer';
import NotFound from './../components/notFound/NotFound';
import HomePage from './../pages/HomePage';
import StudentRegistrationPage from './../pages/StudentRegistrationPage';
import AdminLoginPage from '../pages/AdminLoginPage';
import AdminDashboardPage from './../pages/AdminDashboardPage';

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
        <Route path="/admin/dashboard" component={AdminDashboardPage} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
