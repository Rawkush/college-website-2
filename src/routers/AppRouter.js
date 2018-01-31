import React from 'react';
import {
  Router,
  Route,
  Switch,
  Link,
  NavLink,
  BrowserRouter,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Syllabus from './../components/syllabus/SyllabusContainer';
import Header from './../components/header/Header';
import NotFound from './../components/notFound/NotFound';
import HomePage from './../pages/HomePage';
import FormikStudentRegistration from './../components/registration/studentRegistrationForm';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/syllabus/:sub" component={Syllabus} />
        <Route
          path="/student/registration"
          component={FormikStudentRegistration}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
