import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Currency from './Sidebar/Currency/Currency';

export const App = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        <Sidebar />
        <div style={{ flex: 1, background: '#f5f5f5', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={
                <div>
                  <h2>Lista tranzacțiilor (în curând)</h2>
                </div>
              }
            />
            <Route
              path="/statistics"
              element={<h2>Statistici (în curând)</h2>}
            />
            <Route path="/currency" element={<Currency />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
