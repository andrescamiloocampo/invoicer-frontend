"use client";

import { type ReactElement } from "react";
import styles from "./Charts.module.css";
import { BarChart } from "../../organisms";
import { PieChart } from "@mui/x-charts";

export const Charts = (): ReactElement => {
  return (
    <section className={styles.charts_container}>
      <div className={styles.transaction}>
        <h3 className={styles.chart_title}>Monthly Transactions</h3>
        <BarChart />
      </div>
      <div className={styles.transaction}>
        <h3 className={styles.chart_title}>Income/Expenses</h3>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },                
              ],
            },
          ]}
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};
