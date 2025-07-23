import React from 'react';
import { Transaction, TransactionType, TransactionTypeLabel } from "../../transactions/types";
import { WalletTypeLabel } from "../../wallets/types";

interface TransactionItemProps {
    item: Transaction,
    onRemove: ( item: Transaction ) => void,
}

export const TransactionItem: React.FC<TransactionItemProps> = ( { item, onRemove } ) => {
    return (
        <>
            <p>Тип операции: { TransactionTypeLabel[ item.transactionType ] }</p>
            <p>Категория: { item.categoryId }</p>
            <p>Сумма: { item.amount }</p>
            <p>Дата: { item.date }</p>
            <p>Счет: { WalletTypeLabel[ item.walletType ] }</p>
            <button onClick={ () => onRemove( item ) }>Удалить</button>
        </>
    );
}



