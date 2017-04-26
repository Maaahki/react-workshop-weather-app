import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import  { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import weatherApp from './reducers';
import './index.css';

// Create store that is used as a singleton accross the application.
// Apply middleware to add further capabilities to the redux store.
const store = createStore(
  weatherApp,
  applyMiddleware(
    thunk,
    logger
  )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
