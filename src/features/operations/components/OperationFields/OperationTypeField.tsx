import React from 'react';
import { TransactionType, TransactionTypeLabel } from "../../../transactions/types";

interface OperationTypeFieldProps {
    transactionType: TransactionType
}

export const OperationTypeField: React.FC<OperationTypeFieldProps> = ( { transactionType } ) => {
    return (
        <p>Тип операции: { TransactionTypeLabel[ transactionType ] }</p>
    );
}

