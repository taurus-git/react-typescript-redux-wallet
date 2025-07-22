import { WalletType } from "../wallets/types";
import { BaseMoneyTransaction, Transaction, TransactionType } from "../transactions/types";

export interface Transfer extends BaseMoneyTransaction {
    fromWallet: WalletType;
    toWallet: WalletType;
    transactionType: TransactionType.TRANSFER;
}

