import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        <Sidebar />
        <div style={{ flex: 1, background: '#f5f5f5' }}>
        </div>
      </div>
    </div>
  );
};
