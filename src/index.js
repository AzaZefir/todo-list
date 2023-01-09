import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.createElement('button', onClick => console.log('click'), 'click' )

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
