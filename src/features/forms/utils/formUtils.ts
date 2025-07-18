import { DEFAULT_FORM_VALUES, FORM_FIELD_NAMES } from "../types";
import { WalletType } from "../../wallets/types";
import { TransactionType } from "../../transactions/types";

export const getFormFields = ( formData: FormData ) => {
    return {
        amount: Number( formData.get( FORM_FIELD_NAMES.amount ) ) || DEFAULT_FORM_VALUES.amount,
        categoryId: String( formData.get( FORM_FIELD_NAMES.categoryId ) ) || DEFAULT_FORM_VALUES.categoryId,
        date: String( formData.get( FORM_FIELD_NAMES.date ) ) || DEFAULT_FORM_VALUES.date,
        comment: String( formData.get( FORM_FIELD_NAMES.comment ) ) || DEFAULT_FORM_VALUES.comment,
        walletType: (formData.get( FORM_FIELD_NAMES.walletType ) as WalletType) || DEFAULT_FORM_VALUES.walletType,
        fromWallet: formData.get( FORM_FIELD_NAMES.fromWallet ) as WalletType || DEFAULT_FORM_VALUES.fromWallet,
        toWallet: formData.get( FORM_FIELD_NAMES.toWallet ) as WalletType || DEFAULT_FORM_VALUES.toWallet,
        transactionType: formData.get( FORM_FIELD_NAMES.transactionType ) as TransactionType || DEFAULT_FORM_VALUES.transactionType,
    }
}
