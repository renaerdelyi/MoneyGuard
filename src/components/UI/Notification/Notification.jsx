import React from "react";
import styles from "./Notification.module.css";

const Notification = ({ message, type, onClose }) => {
  if (!message) return null; 

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>X</button>
    </div>
  );
};

export default Notification;
