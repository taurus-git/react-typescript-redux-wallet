import { WalletType } from "../wallets/types";
import { TransactionType } from "../transactions/types";
import { MoneyOperation } from "../operations/types";

export interface Transfer extends MoneyOperation {
    fromWallet: WalletType;
    toWallet: WalletType;
    transactionType: TransactionType.TRANSFER;
}
