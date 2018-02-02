import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Actions
import { startSetNotification } from './actions/notifications';

// Components
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(startSetNotification());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
