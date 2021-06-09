import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// prepare store
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
