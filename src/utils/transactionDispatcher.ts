import { AppDispatch } from "../store";
import { getFormFields } from "./formUtils";
import { createIncome } from "../store/features/incomes/incomesSlice";
import { WalletType } from "../types/wallets";
import { createCardExpense, createCardIncome } from "../store/features/bankCardSlice/bankCardSlice";
import { createCashExpense, createCashIncome } from "../store/features/cashSlice/cashSlice";
import { createExpense } from "../store/features/expenses/expensesSlice";

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
    },
})
