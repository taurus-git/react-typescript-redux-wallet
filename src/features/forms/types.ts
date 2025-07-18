import { WalletType } from "../wallets/types";
import { Transaction, TransactionType } from "../transactions/types";

export type FormErrors = Partial<Record<keyof Omit<Transaction, "id" | "comment">, string>>;
export type InputTypes = HTMLInputElement | HTMLSelectElement;

export const FORM_FIELD_NAMES = {
    amount: "amount",
    categoryId: "categoryId",
    date: "date",
    comment: "comment",
    walletType: "walletType",
    fromWallet: "fromWallet",
    toWallet: "toWallet",
    transactionType: "transactionType",
} as const;

export const DEFAULT_FORM_VALUES = {
    amount: 0,
    categoryId: "",
    date: "",
    comment: undefined,
    walletType: WalletType.BANK_CARD,
    fromWallet: WalletType.BANK_CARD,
    toWallet: WalletType.CASH,
    transactionType: TransactionType.EXPENSE
} as const;
