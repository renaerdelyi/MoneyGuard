import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import StatisticsPage from 'pages/StatisticsPage/Statistics';
import HomePage from 'pages/HomePage/Home';


export const App = () => {
  return (
    <Routes>
      {/* 🔐 Pagina de autentificare */}
      <Route path="/" element={<LoginPage />} />

      {/* 🧱 Dashboard layout + rute imbricate */}
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="statistics" element={<StatisticsPage />} />
      </Route>

      {/* 🔄 Orice altceva => redirect spre login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};