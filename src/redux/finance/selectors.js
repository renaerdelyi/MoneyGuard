// src/redux/finance/selectors.js

export const selectTotalBalance = state => state.finance?.totalBalance ?? 0;
