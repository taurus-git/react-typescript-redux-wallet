import { WalletType } from "./wallets";
import { Transaction } from "./transactions";

export type FormErrors = Partial<Record<keyof Omit<Transaction, "id" | "comment">, string>>;
export type InputTypes = HTMLInputElement | HTMLSelectElement;

export const FORM_FIELD_NAMES = {
    amount: "amount",
    categoryId: "categoryId",
    date: "date",
    comment: "comment",
    walletType: "walletType"
} as const;

export const DEFAULT_FORM_VALUES = {
    amount: 0,
    categoryId: "",
    date: "",
    comment: undefined,
    walletType: WalletType.BANK_CARD,
} as const;
