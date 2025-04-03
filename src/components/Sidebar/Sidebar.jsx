import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Icon from "../Icon/Icon";
import Balance from "./Balance/Balance";
import Currency from "./Currency/Currency";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="/home" className={getLinkClass}>
              <div className={styles.wrapper}>
                <Icon name="homepage" className={styles.icon} />
              </div>
              {!isMobile && <span className={styles.navText}>Home</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className={getLinkClass}>
              <div className={styles.wrapper}>
                <Icon name="statistics" className={styles.icon} />
              </div>
              {!isMobile && (
                <span className={styles.navText}>Statistics</span>
              )}
            </NavLink>
          </li>
          {isMobile && (
            <li>
              <NavLink to="/currency" className={getLinkClass}>
                <div className={styles.wrapper}>
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
