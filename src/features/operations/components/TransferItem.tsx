import React from 'react';
import { Transfer } from "../../transfer/types";
import { OperationTypeField } from "./OperationFields/OperationTypeField";
import { OperationAmountField } from "./OperationFields/OperationAmountField";
import { OperationDateField } from "./OperationFields/OperationDateField";
import { OperationWalletField } from "./OperationFields/OperationWalletField";
import { OperationDeleteField } from "./OperationFields/OperationDeleteField";
import { WalletTypeLabel } from "../../wallets/types";
import styles from "./OperationList.module.scss";

interface TransferItemProps {
    item: Transfer,
    onRemove: ( item: Transfer ) => void,
}

export const TransferItem: React.FC<TransferItemProps> = ( { item, onRemove } ) => {
    const { transactionType, date, fromWallet, toWallet } = item;

    return (
        <>
            <div className={ `d-flex flex-col ${ styles.OperationList__item }` }>
                <div className={ `d-flex mb-1 ${ styles.OperationList__primary }` }>
                    <div className={ `d-flex ${ styles.OperationList__wallet }` }>
                        <OperationWalletField walletType={ fromWallet }/>
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
                    <div className={ `d-flex ${ styles.OperationList__date }` }>
                        <span>{ WalletTypeLabel[ fromWallet ] }</span>
                        <OperationDateField date={ date }/>
                    </div>
                    <div className={ `d-flex ${ styles.OperationList__wallet }` }>
                        <OperationWalletField walletType={ toWallet }/>
                        <span>{ WalletTypeLabel[ toWallet ] }</span>
                    </div>
                </div>


            </div>
        </>
    );
}

