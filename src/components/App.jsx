import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import DashboardPage from '../pages/DashboardPage';
import StatisticsPage from '../pages/StatisticsPage/Statistics';
import HomePage from '../pages/HomePage/Home';

import { PrivateRoute } from '../Routes/PrivateRoute';
import { RestrictedRoute } from '../Routes/RestrictedRoute';

export const App = () => {
  return (
    <Routes>
      {/* 🔒 Pagini accesibile doar dacă NU ești logat */}
      <Route
        path="/login"
        element={<RestrictedRoute component={<LoginPage />} />}
      />
      <Route
        path="/register"
        element={<RestrictedRoute component={<RegistrationPage />} />}
      />

      {/* 🔐 Rute protejate – doar pentru utilizatori logați */}
      <Route
        path="/dashboard"
        element={<PrivateRoute><DashboardPage /></PrivateRoute>}
      >
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="statistics" element={<StatisticsPage />} />
      </Route>

      {/* 🔁 Redirectare pentru orice altceva */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
