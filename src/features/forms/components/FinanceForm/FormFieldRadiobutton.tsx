import React from 'react';
import styles from './FinanceForm.module.scss';
import { TransactionType } from "../../../transactions/types";

interface FormFieldRadiobuttonProps {
    transactionType: TransactionType;
    value: TransactionType;
    onChange: ( value: TransactionType ) => void;
    children?: React.ReactNode;
}

export const FormFieldRadiobutton: React.FC<FormFieldRadiobuttonProps> = (
    {
        transactionType,
        value,
        onChange,
        children
    } ) => {
    const isChecked = transactionType === value;

    return (
        <label className={ `${ styles.radioLabel } ${ isChecked ? styles.radioLabelChecked : '' }` }>
            <input
                type="radio"
                name="transactionType"
                value={ value }
                checked={ isChecked }
                onChange={ () => onChange( value ) }
            />
            { children }
        </label>
    );
}

