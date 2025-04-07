import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectSummary from '../../redux/statistics/selectors';
import { fetchTransSumThunk } from '../../redux/statistics/operations';
import { coloredCategoriesMap } from '../Chart/Chart';
import { setTotalBalance } from '../../redux/financeSlice';
import styles from './StatisticsTable.module.css';

export const formatNumber = number => {
  return Number(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$& ');
};

const StatisticsTable = () => {
  const summary = useSelector(selectSummary);
  const dispatch = useDispatch();

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  // 1. Fetch statistics
  useEffect(() => {
    dispatch(fetchTransSumThunk({ month: currentMonth, year: currentYear }));
  }, [dispatch, currentMonth, currentYear]);

  // 2. Set total balance in store after summary is updated
  useEffect(() => {
    if (
      summary.incomeSummary !== undefined &&
      summary.expenseSummary !== undefined
    ) {
      let balance = summary.incomeSummary - summary.expenseSummary;
      if (summary.expenseSummary > summary.incomeSummary) {
        balance = -Math.abs(balance);
      }
     
      dispatch(setTotalBalance(balance)); 
    }
  }, [summary.incomeSummary, summary.expenseSummary, dispatch]);

  const periodSummary = summary.categoriesSummary
    ? summary.categoriesSummary
        .filter(category => category.type === 'EXPENSE')
        .map(category => ({
          ...category,
          color: coloredCategoriesMap.get(category.name),
        }))
        .sort((a, b) => a.total - b.total)
    : [];

  return (
    <section className={styles.tableContainer}>
      <div className={styles.category}>
        <p>Category</p>
        <p>Sum</p>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          {periodSummary.length ? (
            periodSummary.map((category, index) => (
              <li className={styles.item} key={index}>
                <div>
                  <span style={{ backgroundColor: category.color }} />
                  <p>{category.name}</p>
                </div>
                <p>{formatNumber(category.total)}</p>
              </li>
            ))
          ) : (
            <p className={styles.transactions}>
              You don't have any transactions in this period
            </p>
          )}
        </ul>
      </div>
      <div className={styles.expenses}>
        <h3>Expenses:</h3>
        <p>{formatNumber(summary.expenseSummary)}</p>
      </div>
      <div className={styles.income}>
        <h3>Income:</h3>
        <p>{formatNumber(summary.incomeSummary)}</p>
      </div>
    </section>
  );
};

export default StatisticsTable;
