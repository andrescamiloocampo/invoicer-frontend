import { type ReactElement } from "react";
import { getInvoices } from "@/app/server/getInvoices";
import styles from "./invoices.module.css";

export default async function InvoicesPage(): Promise<ReactElement> {
  const response = await getInvoices();
  return (
    <div className={styles.invoices_container}>
      <div className={styles.invoices_table_wrapper}>
        <table className={styles.invoices_table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Monto</th>
              <th>Tipo de transacción</th>
              <th>Fecha de transacción</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(response) ? (
              response.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.transactionType}</td>
                  <td>{new Date(item.transactionDate).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No hay datos</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
