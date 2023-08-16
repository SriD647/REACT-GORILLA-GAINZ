// import {StrictMode} from "react";
// import { createRoot } from "react-dom/client";
// import AppRouter from './router';
// const root = createRoot(document.getElementById("app"))
// root.render(<StrictMode><AppRouter/></StrictMode>)

// index.js
// import './scss/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);