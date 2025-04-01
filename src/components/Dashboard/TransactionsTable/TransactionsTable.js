import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TransactionsTableStyled } from './TransactionsTableStyled';

export const TransactionsTable = () => {
  return (
    <TransactionsTableStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </TransactionsTableStyled>
  );
};
