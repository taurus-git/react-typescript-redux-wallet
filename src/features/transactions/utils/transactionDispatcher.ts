import { AppDispatch } from "../../../store";
import { getFormFields } from "../../forms/utils/formUtils";
import { WalletType } from "../../wallets/types";
import { createCardExpense, createCardIncome } from "../../wallets/redux/bankCardSlice";
import { createCashExpense, createCashIncome } from "../../wallets/redux/cashSlice";
import { createExpense } from "../redux/expensesSlice";
import { createIncome } from "../redux/incomesSlice";
import { createTransfer } from "../../transfer/redux/transferSlice";

export const createTransactionDispatchers = ( dispatch: AppDispatch ) => ({
    dispatchIncome: ( formFields: ReturnType<typeof getFormFields> ) => {
        const { amount, walletType } = formFields;

        dispatch( createIncome( formFields ) );

        if ( walletType === WalletType.BANK_CARD ) {
            dispatch( createCardIncome( amount ) );
        } else if ( walletType === WalletType.CASH ) {
            dispatch( createCashIncome( amount ) );
        }
    },

    dispatchExpense: ( formFields: ReturnType<typeof getFormFields> ) => {
        const { amount, walletType } = formFields;

        dispatch( createExpense( formFields ) );

        if ( walletType === WalletType.BANK_CARD ) {
            dispatch( createCardExpense( amount ) );
        } else if ( walletType === WalletType.CASH ) {
            dispatch( createCashExpense( amount ) );
        }
    },

    dispatchTransfer: ( formFields: ReturnType<typeof getFormFields> ) => {
        const { amount, fromWallet, toWallet } = formFields;

        if ( fromWallet === toWallet ) return;

        if ( fromWallet === WalletType.BANK_CARD && toWallet === WalletType.CASH ) {
            dispatch( createCardExpense( amount ) );
            dispatch( createCashIncome( amount ) );
        } else if ( fromWallet === WalletType.CASH && toWallet === WalletType.BANK_CARD ) {
            dispatch( createCashExpense( amount ) );
            dispatch( createCardIncome( amount ) );
        }

        dispatch( createTransfer( formFields ) );
    },
})
