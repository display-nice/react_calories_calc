import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from '@components/app/App';

import '@css/style.css';
import '@css/normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);