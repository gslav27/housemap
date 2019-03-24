import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';
import callAPI from './_storeMiddlewares/callAPI';

const initialState = {};

const middleware = [
  thunk,
  callAPI,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
