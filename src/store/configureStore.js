import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import authReducer from '../reducers/auth';
import notificaionsReducer from './../reducers/notifications';
import eventsReducer from './../reducers/events';
import syllabusReducer from './../reducers/syllabus';
import timeTableReducer from './../reducers/timeTable';
import studentPrimaryReducer from './../reducers/studentPrimary';
import studentSecondaryReducer from './../reducers/studentSecondary';
import teacherPrimaryReducer from './../reducers/teacherPrimary';
import teacherSecondaryReducer from './../reducers/teacherSecondary';
import tendersReducer from './../reducers/tenders';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      notifications: notificaionsReducer,
      events: eventsReducer,
      syllabus: syllabusReducer,
      timeTable: timeTableReducer,
      studentPrimary: studentPrimaryReducer,
      studentSecondary: studentSecondaryReducer,
      teacherPrimary: teacherPrimaryReducer,
      teacherSecondary: teacherSecondaryReducer,
      tenders: tendersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
