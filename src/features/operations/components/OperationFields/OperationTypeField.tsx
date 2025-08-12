import React from 'react';
import styles from '../OperationList.module.scss';
import { TransactionType, TransactionTypeLabel } from "../../../transactions/types";

interface OperationTypeFieldProps {
    transactionType: TransactionType
}

export const OperationTypeField: React.FC<OperationTypeFieldProps> = ( { transactionType } ) => {
    return (
        <span
            className={ `px-1 py-04 ${styles.OperationList__TypeField}` }
            data-operation-type={ transactionType }
        >
            { TransactionTypeLabel[ transactionType ] }
        </span>
    );
}

