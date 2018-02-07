import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import adminAuthReducer from '../reducers/adminAuth';
import notificaionsReducer from './../reducers/notifications';
import eventsReducer from './../reducers/events';
import syllabusReducer from './../reducers/syllabus';
import timeTableReducer from './../reducers/timeTable';
import studentPrimaryReducer from './../reducers/studentPrimary';
import studentSecondaryReducer from './../reducers/studentSecondary';
import teacherPrimaryReducer from './../reducers/teacherPrimary';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      admin: adminAuthReducer,
      notifications: notificaionsReducer,
      events: eventsReducer,
      syllabus: syllabusReducer,
      timeTable: timeTableReducer,
      studentPrimary: studentPrimaryReducer,
      studentSecondary: studentSecondaryReducer,
      teacherPrimary: teacherPrimaryReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
