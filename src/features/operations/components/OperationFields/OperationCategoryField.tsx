import React from 'react';

interface OperationCategoryFieldProps {
    categoryId: string;
}

export const OperationCategoryField: React.FC<OperationCategoryFieldProps> = ( { categoryId } ) => {
    return (
        <p>Категория: { categoryId }</p>
    );
}


