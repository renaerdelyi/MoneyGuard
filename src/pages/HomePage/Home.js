import { StyledSectionHome } from 'pages/HomePage/HomePage.styled';
import { BtnAddTransaction } from '../../components/BtnAddTransaction/BtnAddTransaction';
import TransactionList from 'components/TransactionList/TransactionList';
import React, { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify'; // Importăm ToastContainer și toast din react-toastify
import 'react-toastify/dist/ReactToastify.css'; //

const HomePage = () => {
  // Folosim useEffect pentru a adăuga un mesaj de succes la încărcarea paginii
  useEffect(() => {
    // Afișează un toast de succes la încărcarea paginii
    toast.success('Logare reușită! Bun venit pe HomePage! 🎉');
  }, []); 
  return (
    <StyledSectionHome>
      <TransactionList />
      <BtnAddTransaction />
      <ToastContainer
        position="top-right"
        autoClose={3000} // Toast-ul dispare după 3 secunde
        hideProgressBar={false} // Afișăm bara de progres
        newestOnTop={false} // Mesajele noi nu sunt plasate deasupra celor vechi
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // Tema colorată
      />
    </StyledSectionHome>
  );
};

export default HomePage;
