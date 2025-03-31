// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// import { useSelector } from "react-redux";
// import {
//   selectCategoriesSummary,
//   selectPeriodTotal,
// } from "../../../redux/Auth/selectors";
// import styles from "./CurrencyChart.module.css";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const options = {
//   borderWidth: 0,
//   cutout: "72%",
// };

// const plugins = [
//   {
//     id: "shadow",
//     beforeDraw: function (chart) {
//       const { ctx } = chart;
//       ctx.shadowColor = "rgba(0,0,0,1)";
//       ctx.shadowOffsetX = 0;
//       ctx.shadowOffsetY = 0;
//       ctx.shadowBlur = 8;
//     },
//   },
// ];

// const colors = [
//   "#fed057",
//   "#ffd8d0",
//   "#fd9498",
//   "#c5baff",
//   "#6e78e8",
//   "#4a56e2",
//   "#81e1ff",
//   "#24cca7",
//   "#00ad84",
// ];

// const CurrencyChart = () => {
//   const periodTotal = useSelector(selectPeriodTotal);
//   const transactionCategories = useSelector(selectCategoriesSummary);

//   let categories = [];

//   if (periodTotal > 0) {
//     categories = transactionCategories.map((category, index) => ({
//       name: category.name,
//       total: category.total,
//       color: colors[index],
//     }));
//   }

//   const categoriesTotal = categories.map((c) => c.total);
//   const categoriesColor = categories.map((c) => c.color);

//   const data = {
//     labels: [],
//     datasets: [
//       {
//         data: periodTotal === 0 ? [1] : categoriesTotal,
//         backgroundColor: periodTotal === 0 ? ["#00000026"] : categoriesColor,
//       },
//     ],
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.chartContainer}>
//         <div className={styles.chart}>
//           <Doughnut data={data} options={options} plugins={plugins} />
//           <p className={styles.insideText}>${periodTotal.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CurrencyChart;
