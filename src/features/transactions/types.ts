import { WalletType } from "../wallets/types";
import { MoneyOperation } from "../operations/types";

export enum TransactionType {
    EXPENSE = "expenses",
    INCOME = "incomes",
    TRANSFER = "transfers",
}

export interface Transaction extends MoneyOperation {
    categoryId: string;
    comment?: string;
    walletType: WalletType;
    transactionType: TransactionType.EXPENSE | TransactionType.INCOME;
}

export interface Expense extends Transaction {
    transactionType: TransactionType.EXPENSE;
}

export interface Income extends Transaction {
    transactionType: TransactionType.INCOME;
}

export const TransactionTypeLabel: Record<TransactionType, string> = {
    [ TransactionType.EXPENSE ]: "Расход",
    [ TransactionType.INCOME ]: "Доход",
    [ TransactionType.TRANSFER ]: "Перевод",
}

