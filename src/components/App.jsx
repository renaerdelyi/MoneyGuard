import React from 'react';
import Sidebar from './Sidebar/Sidebar';

export const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, background: '#f5f5f5' }}></div>
    </div>
  );
};
