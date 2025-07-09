import React from 'react';
import { TransactionType } from "../../../types/transactions";

interface FormFieldTransactionToggleProps {
    transactionType: TransactionType,
    setTransactionType: (type: TransactionType) => void,
}

export const FormFieldTransactionToggle: React.FC<FormFieldTransactionToggleProps> = (
    {
        transactionType,
        setTransactionType
    } ) => {
    return (
        <div>
            <button
                type="button"
                className={ `${ transactionType === TransactionType.EXPENSE ? 'active' : '' }` }
                onClick={ () => setTransactionType( TransactionType.EXPENSE ) }>
                Расходы
            </button>
            <button
                type="button"
                className={ `${ transactionType === TransactionType.INCOME ? 'active' : '' }` }
                onClick={ () => setTransactionType( TransactionType.INCOME ) }>
                Доходы
            </button>
        </div>
    );
}

