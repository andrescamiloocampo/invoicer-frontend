import { type ReactElement } from "react";
import { Charts } from "../components/sections";
import { getInvoices } from "../server/getInvoices";

export default async function DashboardPage(): Promise<ReactElement> {
  const invoices = await getInvoices();
  return (
    <div>
      <Charts invoices={invoices} />
    </div>
  );
}
