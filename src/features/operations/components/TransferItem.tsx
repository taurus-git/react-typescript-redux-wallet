import React from 'react';
import { TransactionTypeLabel } from "../../transactions/types";
import { Transfer } from "../../transfer/types";
import { WalletTypeLabel } from "../../wallets/types";

interface TransferItemProps {
    item: Transfer,
    onRemove: ( item: Transfer ) => void,
}

export const TransferItem: React.FC<TransferItemProps> = ( { item, onRemove } ) => {
    return (
        <>
            <p>Тип операции: { TransactionTypeLabel[ item.transactionType ] }</p>
            <p>{ TransactionTypeLabel[ item.transactionType ] }</p>
            <p>{ WalletTypeLabel[ item.fromWallet ] }</p>
            <p>{ WalletTypeLabel[ item.toWallet ] }</p>
            <p>Сумма: { item.amount }</p>
            <p>Дата: { item.date }</p>
            <button onClick={ () => onRemove( item ) }>Удалить</button>
        </>
    );
}

