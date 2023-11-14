import React from 'react';
import ReactDOM from 'react-dom';
import './Static/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './dark-mode'; // Import DarkModeProvider

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();