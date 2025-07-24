import React from 'react';
import { Transaction } from "../../transactions/types";
import { OperationTypeField } from "./OperationFields/OperationTypeField";
import { OperationCategoryField } from "./OperationFields/OperationCategoryField";
import { OperationAmountField } from "./OperationFields/OperationAmountField";
import { OperationDateField } from "./OperationFields/OperationDateField";
import { OperationWalletField } from "./OperationFields/OperationWalletField";
import { OperationDeleteField } from "./OperationFields/OperationDeleteField";

interface TransactionItemProps {
    item: Transaction,
    onRemove: ( item: Transaction ) => void,
}

export const TransactionItem: React.FC<TransactionItemProps> = ( { item, onRemove } ) => {
    const { transactionType, categoryId, date, walletType } = item;

    return (
        <>
            <OperationTypeField transactionType={ transactionType }/>
            <OperationCategoryField categoryId={ categoryId }/>
            <OperationAmountField amount={ item.amount }/>
            <OperationDateField date={ date }/>
            <OperationWalletField walletType={ walletType }/>
            <OperationDeleteField item={ item } onRemove={ onRemove }/>
        </>
    );
}



