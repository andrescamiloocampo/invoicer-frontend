import { InvoiceModel } from "@/models/invoice.model";

const transactions = ["income", "outcome"];

export interface TransactionsCount {
  name: string;
  count: number;
}

export const categorizeTransaction = (
  invoices: InvoiceModel[]
): TransactionsCount[] => {
  const result: TransactionsCount[] = transactions.map((name) => ({
    name,
    count: 0,
  }));

  invoices.forEach(({ transactionType }) => {
    const idx = transactions.indexOf(transactionType);
    if (idx !== -1) {
      result[idx].count++;
    }
  });
  return result;
};
