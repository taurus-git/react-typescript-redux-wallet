import { WalletType } from "../wallets/types";

export interface Transaction {
    id: string;
    amount: number;
    categoryId: string;
    date: string;
    comment?: string;
    walletType: WalletType;
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
