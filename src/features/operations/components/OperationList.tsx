import React from 'react';
import styles from './OperationList.module.scss';
import { AllOperations } from "../types";
import { isTransaction } from "../../transactions/utils/transactionUtils";
import { isTransfer } from "../../transfer/utils/transferUtils";
import { TransactionItem } from "./TransactionItem";
import { TransferItem } from "./TransferItem";
import { useOperationRemover } from "../hooks/useOperationRemover";

interface OperationItemProps {
    operations: AllOperations[],
}

export const OperationList: React.FC<OperationItemProps> = ( { operations } ) => {
    const { removeTransaction, removeTransfer, } = useOperationRemover();

    return (
        <ul className="list-none">
            { operations.map( item => (
                <li key={ item.id } className={ `d-flex flex-col mb-1 px-1 py-1 ${ styles.OperationList }` }>
                    { isTransaction( item ) &&
                        <TransactionItem item={ item } onRemove={ removeTransaction }/>
                    }
                    { isTransfer( item ) &&
                        <TransferItem item={ item } onRemove={ removeTransfer }/>
                    }
                </li>
            ) ) }
        </ul>
    );
}
