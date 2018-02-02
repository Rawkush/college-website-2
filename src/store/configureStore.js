import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import adminAuthReducer from '../reducers/adminAuth';
import notificaionsReducer from './../reducers/notifications';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      admin: adminAuthReducer,
      notifications: notificaionsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
