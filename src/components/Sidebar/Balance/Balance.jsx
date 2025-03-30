import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Balance.module.css';

const Balance = () => {
  const totalBalance = useSelector(state => state.finance.totalBalance);

  return (
    <div className={styles.balanceWrapper}>
      <p className={styles.label}>YOUR BALANCE</p>
      <p className={styles.amount}>₴ {totalBalance?.toLocaleString('en-US') || '0.00'}</p>
    </div>
  );
};

export default Balance;
