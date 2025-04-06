import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

export const App = () => {
  return (
    <Routes>
      {/* ✅ Login default */}
      <Route path="/" element={<LoginPage />} />

      {/* ✅ Dashboard Layout + subrute */}
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route
          path="home"
          element={<div style={{ color: 'white' }}>🏠 Dashboard Home</div>}
        />
        <Route
          path="statistics"
          element={<div style={{ color: 'white' }}>📊 Dashboard Statistics</div>}
        />
      </Route>

      {/* 🧼 Catch-all: redirecționează către login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
