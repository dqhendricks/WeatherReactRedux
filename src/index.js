import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; // allows for promises middleware (delays run of reducer code until promise fullfilled)

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware( ReduxPromise )( createStore ); // connect promises middleware

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector( '.container' ) );
