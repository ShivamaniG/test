// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './pages/Results';
import FileUpload from './pages/FileUpload';
import { UploadProvider } from './context/UploadContext'; // Import the UploadProvider
import './index.css'; // Import the CSS file

ReactDOM.render(
  <React.StrictMode>
    <UploadProvider> {/* Wrap the app in the UploadProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Results />} />
          <Route path="/upload" element={<FileUpload />} />
        </Routes>
      </Router>
    </UploadProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
