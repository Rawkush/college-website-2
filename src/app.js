import React from 'react';
import { Provider } from 'react-redux';
// Style related Imports
import 'normalize.css/normalize.css';
import './theme/globalStyles';

// Configuring the store
import configureStore from './store/configureStore';

// Actions
import {
  startSetNotification,
  startSetAllNotification,
} from './actions/notifications';
import { startSetSyllabus } from './actions/syllabus';
import { startSetTimeTable } from './actions/timeTable';
import { startSetEvent } from './actions/events';
import { startSetStudent } from './actions/studentPrimary';
import { startSetStudentSecondary } from './actions/studentSecondary';
import { startSetTeacherSecondary } from './actions/teacherSecondary';

// Components
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(startSetNotification());
store.dispatch(startSetAllNotification());
store.dispatch(startSetSyllabus());
store.dispatch(startSetTimeTable());
store.dispatch(startSetEvent());
store.dispatch(startSetStudent());
store.dispatch(startSetStudentSecondary());
store.dispatch(startSetTeacherSecondary());

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
