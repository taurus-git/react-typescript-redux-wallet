import React from 'react';
import styles from '../OperationList.module.scss';

interface OperationDateFieldProps {
    date: string;
}

export const OperationDateField: React.FC<OperationDateFieldProps> = ( { date } ) => {
    return (
        <span className={ `${styles.OperationList__DateField}` }>{ date }</span>
    );
}


