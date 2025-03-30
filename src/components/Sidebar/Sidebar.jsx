import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as StatsIcon } from '../../assets/icons/statistics.svg';
import styles from './Sidebar.module.css';
import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      
      <nav className={styles.nav}>
        <NavLink to="/home" className={({ isActive }) => isActive ? styles.active : ''}>
          <HomeIcon className={styles.icon} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/statistics" className={({ isActive }) => isActive ? styles.active : ''}>
          <StatsIcon className={styles.icon} />
          <span>Statistics</span>
        </NavLink>
      </nav>
      <Balance />
      <Currency />
    </aside>
  );
};

export default Sidebar;
