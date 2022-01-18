import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import App from './App';
import './db/connection';
import './services/get-message';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
