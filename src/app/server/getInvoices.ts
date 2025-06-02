import type { InvoiceModel } from "@/models/invoice.model";

export const getInvoices = async ():Promise<InvoiceModel[] | undefined> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/invoices`, {
      method: "GET",
      headers,
    });
    if(!response.ok) return []
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
