import React from 'react';
import { NavLink } from 'react-router-dom';
import Balance from './Balance/Balance';
import Currency from './Currency/Currency';
import Icon from '../Icon/Icon';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Icon name="homepage" className={styles.icon} />
          <span className={styles.navText}>Home</span>
        </NavLink>

        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Icon name="statistics" className={styles.icon} />
          <span className={styles.navText}>Statistics</span>
        </NavLink>
      </nav>

      <Balance />
      <Currency />
    </aside>
  );
};

export default Sidebar;
