import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { PageHeader } from "../components/common/PageHeader";
import { WalletType, WalletTypeLabel } from "../features/wallets/types";
import { Transaction, TransactionType } from "../features/transactions/types";
import { deleteExpense } from "../features/transactions/redux/expensesSlice";
import { deleteIncome } from "../features/transactions/redux/incomesSlice";
import { deleteTransfer } from "../features/transfer/redux/transferSlice";
import { createCardIncome, createCardExpense } from "../features/wallets/redux/bankCardSlice";
import { createCashIncome, createCashExpense } from "../features/wallets/redux/cashSlice";
import { Transfer } from "../features/transfer/types";


const Dashboard = () => {
    const dispatch = useDispatch<AppDispatch>();

    const expenses = useSelector( ( state: RootState ) => state[ TransactionType.EXPENSE ].items );
    const incomes = useSelector( ( state: RootState ) => state[ TransactionType.INCOME ].items );
    const transfer = useSelector( ( state: RootState ) => state[ TransactionType.TRANSFER ].items );

    const bankCard = useSelector( ( state: RootState ) => state[ WalletType.BANK_CARD ].balance )
    const cash = useSelector( ( state: RootState ) => state[ WalletType.CASH ].balance )

    const transactions = expenses.concat( incomes );

    const handleClick = () => {

    }

    const handleRemove = ( item: Transaction ) => {
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
    }

    const removeTransfer = ( item: Transfer ) => {
        const { transactionType, fromWallet, toWallet, amount, id } = item;

        if ( transactionType === TransactionType.TRANSFER ) {
            if ( fromWallet === WalletType.BANK_CARD && toWallet === WalletType.CASH ) {
                dispatch( createCardIncome( amount ) );
                dispatch( createCashExpense( amount ) );
            } else if ( fromWallet === WalletType.CASH && toWallet === WalletType.BANK_CARD ) {
                dispatch( createCardIncome( amount ) );
                dispatch( createCardExpense( amount ) )
            }

            dispatch( deleteTransfer( id ) );
        }
    }


    return (
        <>
            <PageHeader/>

            <div>
                <b>
                    <pre>{ WalletTypeLabel[ WalletType.BANK_CARD ] } : { bankCard }</pre>
                </b>
                <b>
                    <pre>{ WalletTypeLabel[ WalletType.CASH ] } : { cash }</pre>
                </b>
            </div>

            <div>
                <ul>
                    { transactions.map( item => (
                        <li key={ item.id }>
                            <>
                                { item.categoryId } - { item.amount } - { item.date }
                                <button onClick={ () => handleRemove( item ) }>Удалить</button>
                            </>
                        </li>
                    ) ) }

                    { transfer.map( item => (
                        <li key={ 1 }>
                            <>
                                Перевод { WalletTypeLabel[ item.fromWallet ] } -
                                { WalletTypeLabel[ item.toWallet ] }
                                Сумма: { item.amount }
                                <button onClick={ () => removeTransfer( item ) }>Удалить</button>
                            </>

                        </li>
                    ) ) }
                </ul>
            </div>
        </>
    );
}

export default Dashboard;
