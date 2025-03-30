import React from 'react';
import { NavLink } from 'react-router-dom';
import Balance from './Balance/Balance';
import Currency from './Currency/Currency';
import Icon from '../Icon/Icon';
import { useMediaQuery } from 'react-responsive';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <div className={styles.iconBox}>
                <Icon name="homepage" className={styles.icon} />
              </div>
              {isDesktop && <span className={styles.navText}>Home</span>}
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <div className={styles.iconBox}>
                <Icon name="statistics" className={styles.icon} />
              </div>
              {isDesktop && <span className={styles.navText}>Statistics</span>}
            </NavLink>
          </li>

          {isMobile && (
            <li className={styles.navItem}>
              <NavLink
                to="/currency"
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                <div className={styles.iconBox}>
                  <Icon name="dollar" className={styles.icon} />
                </div>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <Balance />
      <Currency />
    </aside>
  );
};

export default Sidebar;