import React from 'react';

interface OperationAmountFieldProps {
    amount: number;
}

export const OperationAmountField: React.FC<OperationAmountFieldProps> = ( { amount } ) => {
    return (
        <p>Сумма: { amount }</p>
    );
}


