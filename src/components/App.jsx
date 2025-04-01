import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as  Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "././redux/store";
import PrivateRoute from "./redux/routes/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/DashboardPage";

export const App = () => {

  
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar /> {/* Sidebar rămâne pe toate paginile */}

        <div style={{ flex: 1, background: '#f5f5f5' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </PersistGate>
  </Provider>
  );
};


