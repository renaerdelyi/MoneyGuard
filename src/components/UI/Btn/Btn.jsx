import React from "react";
import styles from "./Btn.module.css";

const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  isDisabled = false,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${styles.formbutton} ${styles[variant]}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
