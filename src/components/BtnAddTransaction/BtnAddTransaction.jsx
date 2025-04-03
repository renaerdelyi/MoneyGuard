import { AddTransaction } from '../Modals/AddTransaction/AddTransaction';
import React, { useState } from 'react';
import { BtnOpenModal } from './BtnAddTransaction.styled';
import { getTransactionsCategoriesThunk } from '../../redux/transactions/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredCategories } from '../../redux/transactions/selectors';

const svgOpenModal = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 0V20" stroke="white" strokeWidth="2" />
    <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
  </svg>
);

export const BtnAddTransaction = () => {
  const [isAddTransactionModalOpen, setIsTransactionModalOpen] =
    useState(false);

  const dispatch = useDispatch();
  const transactionCategories = useSelector(selectFilteredCategories);

  function openAddTransactionModal() {
    if (!transactionCategories.length) {
      dispatch(getTransactionsCategoriesThunk());
    }
    setIsTransactionModalOpen(true);
  }

  return (
    <>
      <BtnOpenModal type="button" onClick={openAddTransactionModal}>
        {svgOpenModal}
      </BtnOpenModal>
      {isAddTransactionModalOpen && (
        <AddTransaction closeModal={setIsTransactionModalOpen} />
      )}
    </>
  );
};
