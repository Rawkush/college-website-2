import React from 'react';
import { Provider } from 'react-redux';
// Style related Imports
import 'normalize.css/normalize.css';
import './theme/globalStyles';
import './styles/transition.css';
import './utils/registerServiceWorker';
import './utils/notifications';

// Configuring the store
import configureStore from './store/configureStore';

// Actions
import { startSetNotification } from './actions/notifications';
import { startSetSyllabus } from './actions/syllabus';
import { startSetTimeTable } from './actions/timeTable';
import { startSetEvent } from './actions/events';
import { startSetStudent, studentlogin } from './actions/studentPrimary';
import { startSetStudentSecondary } from './actions/studentSecondary';
import { teacherLogin, startSetTeacher } from './actions/teacherPrimary';
import { startSetTeacherSecondary } from './actions/teacherSecondary';

// Components
import AppRouter from './routers/AppRouter';

const store = configureStore();

// Actions
store.dispatch(startSetNotification());
store.dispatch(startSetSyllabus());
store.dispatch(startSetTimeTable());
store.dispatch(startSetEvent());

// Loging In Login
const studentToken = localStorage.getItem('studentToken');
const teacherToken = localStorage.getItem('teacherToken');
if (studentToken) {
  store.dispatch(studentlogin());
  store.dispatch(startSetStudent());
  store.dispatch(startSetStudentSecondary());
}

if (teacherToken) {
  store.dispatch(teacherLogin());
  store.dispatch(startSetTeacher());
  store.dispatch(startSetTeacherSecondary());
}

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
