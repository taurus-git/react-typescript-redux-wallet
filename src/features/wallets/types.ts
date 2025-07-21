export interface Wallet {
    balance: number;
}

export interface BankCard extends Wallet {

}

export interface Cash extends Wallet {

}

export enum WalletType {
    BANK_CARD = "bank_card",
    CASH = "cash",
}

export const WalletTypeLabel: Record<WalletType, string> = {
    [ WalletType.BANK_CARD ]: "Банковская карта",
    [ WalletType.CASH ]: "Наличные"
}

