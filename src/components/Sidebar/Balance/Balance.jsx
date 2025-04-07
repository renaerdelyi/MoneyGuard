import { useSelector } from "react-redux";
import { selectTotalBalance } from "../../../redux/finance/selectors";
import styles from "./Balance.module.css";

const Balance = () => {
  const balance = useSelector(selectTotalBalance);
  

  const formattedBalance = new Intl.NumberFormat("uk-UA", {
    style: "decimal",
    minimumFractionDigits: 2,
  })
    .format(balance)
    .replace(",", ".");

    const balanceClass = balance < 0 ? styles.negative : styles.positive;

  return (
    <div className={styles.balanceWrapper}>
      <p className={styles.title}>Your Balance</p>
       <p className={`${styles.balance} ${balanceClass}`}>
        € {formattedBalance}</p>
    </div>
  );
};

export default Balance;


