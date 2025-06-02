import { InvoiceModel } from "@/models/invoice.model";

export interface Month  {
    name: string;
    count: number;
}

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const categorizeMonths = (invoices: InvoiceModel[]): Month[] => {
  const result: Month[] = months.map(name => ({ name, count: 0 }));
  invoices.forEach(invoice => {
    const date = new Date(invoice.transactionDate);
    const monthIdx = date.getMonth();
    if (monthIdx >= 0 && monthIdx < 12) {
      result[monthIdx].count++;
    }
  });
  return result;
}