import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Actions
import { startSetNotification } from './actions/notifications';
import { startSetSyllabus } from './actions/syllabus';
import { startSetTimeTable } from './actions/timeTable';
import { startSetEvent } from './actions/events';

// Components
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(startSetNotification());
store.dispatch(startSetSyllabus());
store.dispatch(startSetTimeTable());
store.dispatch(startSetEvent());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
