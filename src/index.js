import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStorage } from './assets/GlobalContext';
import { GlobalStyles } from './assets/styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStorage>
      <App />
    </GlobalStorage>
  </React.StrictMode>
);
