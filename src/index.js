import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import  rootReducer from "./app/Store/Reducers";
import { createBrowserHistory } from 'history';

import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const middleware = [thunk];

// prepare store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
