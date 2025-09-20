import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { UTMProvider } from './context/UTMContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <UTMProvider>
          <App />
        </UTMProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
