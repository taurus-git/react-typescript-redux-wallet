import React from 'react';
import styles from './OperationList.module.scss';
import { Transaction } from "../../transactions/types";
import { OperationTypeField } from "./OperationFields/OperationTypeField";
import { OperationCategoryField } from "./OperationFields/OperationCategoryField";
import { OperationAmountField } from "./OperationFields/OperationAmountField";
import { OperationDateField } from "./OperationFields/OperationDateField";
import { OperationWalletField } from "./OperationFields/OperationWalletField";
import { OperationDeleteField } from "./OperationFields/OperationDeleteField";
import { WalletTypeLabel } from "../../wallets/types";

interface TransactionItemProps {
    item: Transaction,
    onRemove: ( item: Transaction ) => void,
}

export const TransactionItem: React.FC<TransactionItemProps> = ( { item, onRemove } ) => {
    const { transactionType, categoryId, date, walletType } = item;

    return (
        <div className={ `d-flex flex-col ${ styles.OperationList__item }` }>
            <div className={ `d-flex mb-1 ${ styles.OperationList__primary }` }>
                <div className={ `d-flex ${ styles.OperationList__wallet }` }>
                    <OperationWalletField walletType={ walletType }/>
                </div>
                <div className={ `d-flex ${ styles.OperationList__transaction }` }>
                    <OperationTypeField transactionType={ transactionType }/>
                    <OperationAmountField amount={ item.amount }/>
                </div>
                <div className={ `d-flex justify-end ${ styles.OperationList__actions }` }>
                    <OperationDeleteField item={ item } onRemove={ onRemove }/>
                </div>
            </div>
            <div className={ `d-flex ${ styles.OperationList__secondary }` }>
                <div className={ `d-flex ${ styles.OperationList__category }` }>
                    <OperationCategoryField categoryId={ categoryId }/>
                </div>
                <div className={ `d-flex ${ styles.OperationList__date }` }>
                    <span>{ WalletTypeLabel[ walletType ] }</span>
                    <OperationDateField date={ date }/>
                </div>
            </div>
        </div>
    );
}



