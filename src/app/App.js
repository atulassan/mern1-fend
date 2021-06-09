import React, {Fragment} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';

function App(props) {
  return (
      <Fragment>
          <ToastContainer />
          <Routes {...props} />
      </Fragment>
  );
}

export default App;
