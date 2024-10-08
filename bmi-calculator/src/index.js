import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import any global CSS if necessary
import App from './App';  // Correctly import App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Ensure the 'root' div in index.html
);
