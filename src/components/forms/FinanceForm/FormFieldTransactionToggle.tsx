import React from 'react';
import { TransactionType } from "../../../types/transactions";
import { FormFieldRadiobutton } from "./FormFieldRadiobutton";

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
            <FormFieldRadiobutton
                transactionType={ transactionType }
                value={ TransactionType.EXPENSE }
                onChange={ setTransactionType }>
                Расход
            </FormFieldRadiobutton>

            <FormFieldRadiobutton
                transactionType={ transactionType }
                value={ TransactionType.INCOME }
                onChange={ setTransactionType }>
                Доход
            </FormFieldRadiobutton>

            <FormFieldRadiobutton
                transactionType={ transactionType }
                value={ TransactionType.TRANSFER }
                onChange={ setTransactionType }>
                Перевод
            </FormFieldRadiobutton>
        </div>
    );
}

