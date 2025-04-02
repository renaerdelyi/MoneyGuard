import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Currency from './Sidebar/Currency/Currency';

import PrivateRoute from '../redux/routes/PrivateRoute';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import DashboardPage from '../pages/DashboardPage';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
          <Header />
          <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
            <Sidebar />
            <div style={{ flex: 1, background: '#f5f5f5', padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/currency" element={<Currency />} />
                  <Route
                    path="/home"
                    element={<div><h2>Lista tranzacțiilor (în curând)</h2></div>}
                  />
                  <Route
                    path="/statistics"
                    element={<h2>Statistici (în curând)</h2>}
                  />
                </Route>
              </Routes>
            </div>
          </div>
        
      </PersistGate>
    </Provider>
  );
};


