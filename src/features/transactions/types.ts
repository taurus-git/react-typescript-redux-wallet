import { WalletType } from "../wallets/types";

export interface Transaction {
    id: string;
    amount: number;
    categoryId: string;
    date: string;
    comment?: string;
    walletType: WalletType;
    transactionType: TransactionType;
}

/**
 * Expense and Income interfaces extend the shared Transaction structure.
 * This improves semantic clarity across the app and allows independent future modifications.
 * Even if they currently share the same shape, separating them provides better flexibility,
 * maintainability, and type safety as the application grows.
 */
export interface Expense extends Transaction {

}

export interface Income extends Transaction {
}

export enum TransactionType {
    EXPENSE = "expenses",
    INCOME = "incomes",
    TRANSFER = "transfer",
}

export const TransactionTypeLabel: Record<TransactionType, string> = {
    [ TransactionType.EXPENSE ]: "Расход",
    [ TransactionType.INCOME ]: "Доход",
    [ TransactionType.TRANSFER ]: "Перевод",
}
