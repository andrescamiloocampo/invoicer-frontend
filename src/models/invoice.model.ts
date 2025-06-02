export interface InvoiceModel {
    amount:          number;
    transactionDate: Date | string;
    id:              string;
    name:            string;
    transactionType: string;
}
