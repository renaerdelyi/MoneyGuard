import React, { useEffect, useState } from 'react';
import { fetchCurrencyData } from './currencyService';
import CurrencyChart from './CurrencyChart';
import styles from './Currency.module.css';

const Currency = () => {
  const [currency, setCurrency] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCurrencyData();
      if (data) {
        setCurrency(data);
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading currency data...</div>;
  }

  if (!currency) {
    return <div className={styles.error}>Failed to load currency data.</div>;
  }

  return (
    <div className={styles.currencyContainer}>
      <table className={styles.currencyTable}>
        <thead>
          <tr className={styles.currencyTableHeader}>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(currency).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value.purchase}</td>
              <td>{value.sale}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CurrencyChart data={currency} />
    </div>
  );
};

export default Currency;
