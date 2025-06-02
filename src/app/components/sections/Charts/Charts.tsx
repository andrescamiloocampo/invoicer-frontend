"use client";

import { type ReactElement } from "react";
import styles from "./Charts.module.css";
import { BarChart, PieChart, CreateInvoice } from "../../organisms";
import type { ChartsModel } from "./Charts.model";
import {
  categorizeTransaction,
  type TransactionsCount,
  categorizeMonths,
  type Month,
} from "@/app/utils";

export const Charts = ({ invoices }: ChartsModel): ReactElement => {
  const months: Month[] = categorizeMonths(invoices ?? []);
  const transactions: TransactionsCount[] = categorizeTransaction(
    invoices ?? []
  );

  return (
    <section className={styles.charts_container}>
      <div className={styles.charts}>
        <div className={styles.transaction}>
          <h3 className={styles.chart_title}>Monthly Transactions</h3>
          <BarChart months={months} />
        </div>
        <div className={styles.transaction}>
          <h3 className={styles.chart_title}>Income/Outcome</h3>
          <PieChart transactions={transactions} />
        </div>
      </div>

      <CreateInvoice/>

    </section>
  );
};
