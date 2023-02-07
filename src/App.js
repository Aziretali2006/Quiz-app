
import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from './routes/Routes';
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <React.Fragment>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes />
      </React.Suspense>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
