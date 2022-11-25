// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Setup on page load
window.onload = async () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};
