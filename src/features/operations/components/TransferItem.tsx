import React from 'react';
import { Transfer } from "../../transfer/types";
import { OperationTypeField } from "./OperationFields/OperationTypeField";
import { OperationAmountField } from "./OperationFields/OperationAmountField";
import { OperationDateField } from "./OperationFields/OperationDateField";
import { OperationWalletField } from "./OperationFields/OperationWalletField";
import { OperationDeleteField } from "./OperationFields/OperationDeleteField";

interface TransferItemProps {
    item: Transfer,
    onRemove: ( item: Transfer ) => void,
}

export const TransferItem: React.FC<TransferItemProps> = ( { item, onRemove } ) => {
    const { transactionType, date, fromWallet, toWallet } = item;

    return (
        <>
            <OperationTypeField transactionType={ transactionType }/>
            <OperationWalletField walletType={ fromWallet }/>
            <OperationWalletField walletType={ toWallet }/>
            <OperationAmountField amount={ item.amount }/>
            <OperationDateField date={ date }/>
            <OperationDeleteField item={ item } onRemove={ onRemove }/>
        </>
    );
}

