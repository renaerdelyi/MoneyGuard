import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { store, persistor } from './redux/store'; // Aici adaugi persistor-ul importat
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider basename="/MoneyGuard">
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {' '}
          {/* Aici folosești persistor-ul */}
          <BrowserRouter basename="/MoneyGuard">
            <App />
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
);
