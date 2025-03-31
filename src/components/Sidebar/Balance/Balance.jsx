import React from 'react';
// import { useSelector } from 'react-redux'; // <- Șterge sau comentează linia
// import { selectBalance } from '../../../redux/Auth/selectors';
import styles from './Balance.module.css';

const Balance = () => {
  // Temporar — valoare statică
  const balance = 1234.56;

  return (
    <div className={styles.balanceWrapper}>
      <p className={styles.label}>Your Balance</p>
      <p className={styles.amount}>€{balance.toFixed(2)}</p>
    </div>
  );
};

export default Balance;
