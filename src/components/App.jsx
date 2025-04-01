import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header'; 
import TransactionsList from '../components/TransactionList/TransactionList';
;  


export const App = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        <Sidebar />
        <div style={{ flex: 1, background: '#f5f5f5' }}>
           {/* <TransactionsList />  */} trebuie finalizat LogIn pentru Token 
        </div>
      </div>
    </div>
  );
};
