import React from 'react';
import { PageHeader } from "../components/common/PageHeader";
import { WalletTypeLabel } from "../features/wallets/types";
import { TransactionType, TransactionTypeLabel } from "../features/transactions/types";
import { useOperationRemove } from "../features/operations/hooks/useOperationRemove";
import { WalletsSummary } from "../features/dashboard/components/WalletsSummary";
import { useAllOperations } from "../features/operations/hooks/useAllOpereations";

const Dashboard = () => {
    const {
        removeTransaction,
        removeTransfer
    } = useOperationRemove();

    const {allOperations} = useAllOperations();

    return (
        <>
            <PageHeader/>
            <WalletsSummary/>

            <div>
                <ul>
                    { allOperations.map( item => (
                        <li key={ item.id }>
                            { (item.transactionType === TransactionType.EXPENSE || item.transactionType === TransactionType.INCOME) &&
                                <>
                                    <p>Тип операции: { TransactionTypeLabel[ item.transactionType ] }</p>
                                    <p>Категория: { item.categoryId }</p>
                                    <p>Сумма: { item.amount }</p>
                                    <p>Дата: { item.date }</p>
                                    <p>Счет: { WalletTypeLabel[ item.walletType ] }</p>
                                    <button onClick={ () => removeTransaction( item ) }>Удалить</button>
                                </>
                            }
                            { item.transactionType === TransactionType.TRANSFER &&
                                <>
                                    <p>{ TransactionTypeLabel[ item.transactionType ] }</p>
                                    <p>{ WalletTypeLabel[ item.fromWallet ] }</p>
                                    <p>{ WalletTypeLabel[ item.toWallet ] }</p>
                                    Сумма: { item.amount }
                                    <button onClick={ () => removeTransfer( item ) }>Удалить</button>
                                </>
                            }
                        </li>
                    ) ) }
                </ul>
            </div>
        </>
    );
}

export default Dashboard;
