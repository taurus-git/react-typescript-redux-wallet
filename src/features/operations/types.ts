import { TransactionType } from "../transactions/types";

export interface MoneyOperation {
    id: string;
    amount: number;
    date: string;
    transactionType: TransactionType;
}
