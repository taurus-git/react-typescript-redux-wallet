import React from 'react';

interface OperationDateFieldProps {
    date: string;
}

export const OperationDateField: React.FC<OperationDateFieldProps> = ( { date } ) => {
    return (
        <p>Дата: { date }</p>
    );
}


