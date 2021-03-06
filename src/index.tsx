// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENT
import App from './app/App';

// CSS
import './index.css';

import reportWebVitals from './services/webVital/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
