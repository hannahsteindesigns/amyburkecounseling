import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './styles/styles.css';

const reactAppData = window.rpReactPlugin || {}
const { appSelector } = reactAppData
const appAnchorElement = document.querySelector(appSelector)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appAnchorElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
