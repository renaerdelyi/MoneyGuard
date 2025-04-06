import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyChart from "./CurrencyChart";
import styles from "./Currency.module.css";

const Currency = () => {
  const [usdRate, setUsdRate] = useState({ rateBuy: 0, rateSell: 0 });
  const [euroRate, setEuroRate] = useState({ rateBuy: 0, rateSell: 0 });

  useEffect(() => {
    const fetchDataAndStore = async () => {
      try {
        const response = await axios.get("https://api.monobank.ua/bank/currency");
        const data = response.data;
        const fetchTime = new Date().getTime();
        localStorage.setItem("MONO", JSON.stringify({ data, fetchTime }));

        const usd = data.find((item) => item.currencyCodeA === 840);
        const eur = data.find((item) => item.currencyCodeA === 978);

        if (usd) setUsdRate({ rateBuy: usd.rateBuy, rateSell: usd.rateSell });
        if (eur) setEuroRate({ rateBuy: eur.rateBuy, rateSell: eur.rateSell });
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    const storedData = localStorage.getItem("MONO");
    if (storedData) {
      const { data, fetchTime } = JSON.parse(storedData);
      const now = new Date().getTime();
      if (now - fetchTime < 3600000) {
        const usd = data.find((item) => item.currencyCodeA === 840);
        const eur = data.find((item) => item.currencyCodeA === 978);

        if (usd) setUsdRate({ rateBuy: usd.rateBuy, rateSell: usd.rateSell });
        if (eur) setEuroRate({ rateBuy: eur.rateBuy, rateSell: eur.rateSell });
        return;
      }
    }

    fetchDataAndStore();
  }, []);

  const chartData = [
    { name: "start", currency: 0, label: "" },
    { name: "USD", currency: usdRate.rateBuy, label: usdRate.rateBuy?.toFixed(2) },
    { name: "middle", currency: 0, label: "" },
    { name: "EURO", currency: euroRate.rateBuy, label: euroRate.rateBuy?.toFixed(2) },
    { name: "end", currency: 0, label: "" },
  ];

  return (
    <div className={styles.currencyWrapper}>
      <table className={styles.tab}>
        <thead>
          <tr className={styles.header}>
            <th className={styles.item}>Currency</th>
            <th className={styles.item}>Purchase</th>
            <th className={styles.item}>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.item}>USD</td>
            <td className={styles.item}>{usdRate.rateBuy?.toFixed(2)}</td>
            <td className={styles.item}>{usdRate.rateSell?.toFixed(2)}</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.item}>EUR</td>
            <td className={styles.item}>{euroRate.rateBuy?.toFixed(2)}</td>
            <td className={styles.item}>{euroRate.rateSell?.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <CurrencyChart data={chartData} />
    </div>
  );
};

export default Currency;
