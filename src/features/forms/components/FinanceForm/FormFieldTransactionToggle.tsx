import React from 'react';
import styles from './FinanceForm.module.scss';
import { TransactionType, TransactionTypeLabel } from "../../../transactions/types";
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
        <div role="radiogroup" aria-label="Тип операции" id="transaction-type"
             className={ `${ styles.financeForm__radiogroup } d-flex justify-between mb-1 ` }>
            <FormFieldRadiobutton
                transactionType={ transactionType }
                value={ TransactionType.EXPENSE }
                onChange={ setTransactionType }>
                { TransactionTypeLabel[ TransactionType.EXPENSE ] }
            </FormFieldRadiobutton>

            <FormFieldRadiobutton
                transactionType={ transactionType }
                value={ TransactionType.INCOME }
                onChange={ setTransactionType }>
                { TransactionTypeLabel[ TransactionType.INCOME ] }
            </FormFieldRadiobutton>

            <FormFieldRadiobutton
                transactionType={ transactionType }
                value={ TransactionType.TRANSFER }
                onChange={ setTransactionType }>
                { TransactionTypeLabel[ TransactionType.TRANSFER ] }
            </FormFieldRadiobutton>
        </div>
    );
}

