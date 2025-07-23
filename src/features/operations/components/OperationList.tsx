import React from 'react';
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
    const { removeTransaction, removeTransfer } = useOperationRemover();

    return (
        <ul>
            { operations.map( item => (
                <li key={ item.id }>
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
