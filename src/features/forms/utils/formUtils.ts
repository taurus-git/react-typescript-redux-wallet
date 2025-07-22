import { DEFAULT_FORM_VALUES, FORM_FIELD_NAMES } from "../types";
import { WalletType } from "../../wallets/types";
import { BaseMoneyTransaction, Expense, Income, Transaction, TransactionType } from "../../transactions/types";
import { Transfer } from "../../transfer/types";

export const getBaseFormFields = ( formData: FormData ) => ({
        amount: Number( formData.get( FORM_FIELD_NAMES.amount ) ) || DEFAULT_FORM_VALUES.amount,
        date: String( formData.get( FORM_FIELD_NAMES.date ) ) || DEFAULT_FORM_VALUES.date,
        transactionType: formData.get( FORM_FIELD_NAMES.transactionType ) as TransactionType || DEFAULT_FORM_VALUES.transactionType,
    }
);

export const getTransactionFormFields = ( formData: FormData ) => ({
    ...getBaseFormFields( formData ),
    categoryId: String( formData.get( FORM_FIELD_NAMES.categoryId ) ) || DEFAULT_FORM_VALUES.categoryId,
    comment: String( formData.get( FORM_FIELD_NAMES.comment ) ) || DEFAULT_FORM_VALUES.comment,
    walletType: (formData.get( FORM_FIELD_NAMES.walletType ) as WalletType) || DEFAULT_FORM_VALUES.walletType,
});

export const getExpenseFormFields = ( formData: FormData ): Omit<Expense, "id"> => ({
    ...getTransactionFormFields( formData ),
    transactionType: TransactionType.EXPENSE,
});

export const getIncomeFormFields = ( formData: FormData ): Omit<Income, "id"> => ({
    ...getTransactionFormFields( formData ),
    transactionType: TransactionType.INCOME,
});

export const getTransferFormFields = ( formData: FormData ): Omit<Transfer, "id"> => ({
    ...getBaseFormFields( formData ),
    fromWallet: formData.get( FORM_FIELD_NAMES.fromWallet ) as WalletType || DEFAULT_FORM_VALUES.fromWallet,
    toWallet: formData.get( FORM_FIELD_NAMES.toWallet ) as WalletType || DEFAULT_FORM_VALUES.toWallet,
    transactionType: TransactionType.TRANSFER,
});

