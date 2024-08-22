// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Results from './pages/Results';
import './index.css'; // Import the CSS file

ReactDOM.render(
  <React.StrictMode>
    <Results />
  </React.StrictMode>,
  document.getElementById('root')
);
