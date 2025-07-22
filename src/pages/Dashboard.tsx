import React from 'react';
import { PageHeader } from "../components/common/PageHeader";
import { WalletTypeLabel } from "../features/wallets/types";
import { TransactionTypeLabel } from "../features/transactions/types";
import { useMoneyOperations } from "../features/operations/hooks/useMoneyOperations";
import { WalletsSummary } from "../features/dashboard/components/WalletsSummary";

const Dashboard = () => {
    const {
        expenses,
        incomes,
        transfers,
        removeTransaction,
        removeTransfer
    } = useMoneyOperations();


    return (
        <>
            <PageHeader/>
            <WalletsSummary/>

            <div>
                <ul>
                    {/* { transactions.map( item => (
                        <li key={ item.id }>
                            <>
                                { item?.categoryId } - { item.amount } - { item.date }
                                <button onClick={ () => handleRemove( item ) }>Удалить</button>
                            </>
                        </li>
                    ) ) }*/ }

                    { expenses.map( item => (
                        <li key={ item.id }>
                            <>
                                <p>Тип операции: { TransactionTypeLabel[ item.transactionType ] }</p>
                                <p>Категория: { item.categoryId }</p>
                                <p>Сумма: { item.amount }</p>
                                <p>Дата: { item.date }</p>
                                <p>Счет: { WalletTypeLabel[ item.walletType ] }</p>
                                <button onClick={ () => removeTransaction( item ) }>Удалить</button>
                            </>
                        </li>
                    ) ) }

                    { incomes.map( item => (
                        <li key={ item.id }>
                            <>

                                <p>Тип операции: { TransactionTypeLabel[ item.transactionType ] }</p>
                                <p>Категория: { item.categoryId }</p>
                                <p>Сумма: { item.amount }</p>
                                <p>Дата: { item.date }</p>
                                <p>Счет: { WalletTypeLabel[ item.walletType ] }</p>
                                <button onClick={ () => removeTransaction( item ) }>Удалить</button>
                            </>
                        </li>
                    ) ) }

                    { transfers.map( item => (
                        <li key={ item.id }>
                            <>
                                <p>{ TransactionTypeLabel[ item.transactionType ] }</p>
                                <p>{ WalletTypeLabel[ item.fromWallet ] }</p>
                                <p>{ WalletTypeLabel[ item.toWallet ] }</p>
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
