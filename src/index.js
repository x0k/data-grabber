import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import ReactDOM from 'react-dom';
import App from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

const loggerMiddleware = createLogger();

let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 