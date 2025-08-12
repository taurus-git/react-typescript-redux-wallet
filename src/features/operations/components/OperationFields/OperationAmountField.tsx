import React from 'react';
import styles from '../OperationList.module.scss';

interface OperationAmountFieldProps {
    amount: number;
}

export const OperationAmountField: React.FC<OperationAmountFieldProps> = ( { amount } ) => {
    return (
        <b className={ `${ styles.OperationList__AmountField }` }>{ amount } ₽</b>
    );
}


