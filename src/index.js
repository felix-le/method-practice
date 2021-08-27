import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <Suspense fallback={<div>Loading... </div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
