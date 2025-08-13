import React from 'react';
import styles from '../OperationList.module.scss';
import { getDateFormat } from "../../../forms/utils/formUtils";

interface OperationDateFieldProps {
    date: number;
}

export const OperationDateField: React.FC<OperationDateFieldProps> = ( { date } ) => {
    const fullDate = new Date( Number( date ) );
    const formattedDate = getDateFormat( fullDate, 'dmy' );

    return (
        <span className={ `${ styles.OperationList__DateField }` }>{ formattedDate }</span>
    );
}


