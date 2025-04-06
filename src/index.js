import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { store, persistor } from './redux/store';
import { App } from 'components/App';
import { setToken } from './config/userTransactionsApi'; // ✅ adăugat

// ✅ La fiecare pornire, setează token-ul dacă există deja
const savedToken = localStorage.getItem('token');
if (savedToken) {
  setToken(savedToken);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
);
