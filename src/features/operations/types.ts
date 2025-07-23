import { Transaction, TransactionType } from "../transactions/types";
import { Transfer } from "../transfer/types";

export interface MoneyOperation {
    id: string;
    amount: number;
    date: string;
    transactionType: TransactionType;
}

export type AllOperations = Transaction | Transfer;
