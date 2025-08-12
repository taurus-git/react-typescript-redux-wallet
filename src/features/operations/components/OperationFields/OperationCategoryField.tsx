import React from 'react';
import styles from '../OperationList.module.scss';

interface OperationCategoryFieldProps {
    categoryId: string;
}

export const OperationCategoryField: React.FC<OperationCategoryFieldProps> = ( { categoryId } ) => {
    return (
        <span className={ `${ styles.OperationList__CategoryField }` }>{ categoryId }</span>
    );
}


