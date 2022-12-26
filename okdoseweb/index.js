// React
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n/i18n';
import App from './App';

// Setup on page load
window.onload = async () => {
  ReactDOM.render(
    <Suspense fallback="loading">
      <App />
    </Suspense>
    , document.getElementById('root'));
};
