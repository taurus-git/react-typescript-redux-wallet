import {WalletType} from "./wallets";
import { TransactionType } from "./transactions";

export interface Transfer {
    id: string;
    amount: number;
    fromWallet: WalletType;
    toWallet: WalletType;
    date: string;
    transactionType: TransactionType;
}
