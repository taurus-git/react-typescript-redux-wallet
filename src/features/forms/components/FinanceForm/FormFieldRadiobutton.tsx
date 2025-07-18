import React from 'react';
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
    return (
        <label>
            <input
                type="radio"
                name="transactionType"
                value={ value }
                checked={ transactionType === value }
                onChange={ () => onChange( value ) }
            />
            { children }
        </label>
    );
}

