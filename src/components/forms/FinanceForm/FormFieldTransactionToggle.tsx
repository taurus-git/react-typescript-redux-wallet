import React from 'react';
import { TransactionType } from "../../../types/transactions";

interface FormFieldTransactionToggleProps {
    transactionType: TransactionType,
    setTransactionType: ( type: TransactionType ) => void,
}

export const FormFieldTransactionToggle: React.FC<FormFieldTransactionToggleProps> = (
    {
        transactionType,
        setTransactionType
    } ) => {

    return (
        <div role="radiogroup" aria-label="Тип операции" id="transaction-type">
            <label>
                <input
                    type="radio"
                    name="transactionType"
                    value={ TransactionType.EXPENSE }
                    checked={ transactionType === TransactionType.EXPENSE }
                    onChange={ () => setTransactionType( TransactionType.EXPENSE ) }
                />
                Расход
            </label>

            <label>
                <input
                    type="radio"
                    name="transactionType"
                    value={ TransactionType.INCOME }
                    checked={ transactionType === TransactionType.INCOME }
                    onChange={ () => setTransactionType( TransactionType.INCOME ) }
                />
                Доход
            </label>
        </div>
    );
}

