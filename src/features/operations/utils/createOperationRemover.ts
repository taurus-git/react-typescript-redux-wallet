import React from 'react';
import { Transaction, TransactionType } from "../../transactions/types";
import { WalletType } from "../../wallets/types";
import { createCardExpense, createCardIncome } from "../../wallets/redux/bankCardSlice";
import { createCashExpense, createCashIncome } from "../../wallets/redux/cashSlice";
import { deleteExpense } from "../../transactions/redux/expensesSlice";
import { deleteIncome } from "../../transactions/redux/incomesSlice";
import { Transfer } from "../../transfer/types";
import { deleteTransfer } from "../../transfer/redux/transfersSlice";
import { AppDispatch } from "../../../store";

export const createOperationRemover = ( dispatch: AppDispatch ) => ({
    removeTransaction: ( item: Transaction ) => {
        const { transactionType, walletType, amount, id } = item;

        if ( transactionType === TransactionType.EXPENSE ) {
            if ( walletType === WalletType.BANK_CARD ) {
                dispatch( createCardIncome( amount ) );
            } else if ( walletType === WalletType.CASH ) {
                dispatch( createCashIncome( amount ) )
            }

            dispatch( deleteExpense( id ) );
        } else if ( transactionType === TransactionType.INCOME ) {
            if ( walletType === WalletType.BANK_CARD ) {
                dispatch( createCardExpense( amount ) );
            } else if ( walletType === WalletType.CASH ) {
                dispatch( createCashExpense( amount ) )
            }

            dispatch( deleteIncome( id ) );
        } else {
            console.error( "Unknown transaction type: " + transactionType );
        }
    },

    removeTransfer: ( item: Transfer ) => {
        const { transactionType, fromWallet, toWallet, amount, id } = item;

        if ( transactionType === TransactionType.TRANSFER ) {
            if ( fromWallet === WalletType.BANK_CARD && toWallet === WalletType.CASH ) {
                dispatch( createCardIncome( amount ) );
                dispatch( createCashExpense( amount ) );
            } else if ( fromWallet === WalletType.CASH && toWallet === WalletType.BANK_CARD ) {
                dispatch( createCardIncome( amount ) );
                dispatch( createCardExpense( amount ) )
            } else {
                console.error( "Unknown transaction type: " + transactionType );
            }

            dispatch( deleteTransfer( id ) );
        }
    }
})

