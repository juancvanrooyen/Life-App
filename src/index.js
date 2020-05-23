import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware, compose } from 'redux';
import store from './store';
//import thunkMiddleware from 'redux-thunk';
//import rootReducer from './reducers';
//import loggerMiddleware from './middleware/logger';
//import monitorReducerEnhancer from './enhancers/monitorReducer';
import App from './app';
/*
const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);
*/
render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);
