import { WalletType } from "../wallets/types";
import { TransactionType } from "../transactions/types";

export interface Transfer {
    id: string;
    amount: number;
    fromWallet: WalletType;
    toWallet: WalletType;
    date: string;
    transactionType: TransactionType;
}
