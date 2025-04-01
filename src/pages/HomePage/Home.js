import { StyledSectionHome } from 'pages/HomePage/HomePage.styled';
import { BtnAddTransaction } from '../../components/BtnAddTransaction/BtnAddTransaction';
import TransactionList from 'components/TransactionList/TransactionList';
import React from 'react';

const HomePage = () => {
  return (
    <StyledSectionHome>
      <TransactionList />
      <BtnAddTransaction />
    </StyledSectionHome>
  );
};

export default HomePage;
