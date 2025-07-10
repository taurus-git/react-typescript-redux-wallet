export interface Wallet {
    balance: number;
}

export interface BankCard extends Wallet {

}

export interface Cash extends Wallet {

}

export enum WalletType {
    BANK_CARD = "bank card",
    CASH = "cash",
}


