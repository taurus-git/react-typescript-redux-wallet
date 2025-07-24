import React from 'react';
import { AllOperations } from "../../types";

interface OperationDeleteFieldProps<T extends AllOperations> {
    item: T,
    onRemove: ( item: T ) => void;
}

export const OperationDeleteField =
    <T extends AllOperations>(
        {
            item,
            onRemove
        }: OperationDeleteFieldProps<T>
    ) => {
        return (
            <button onClick={ () => onRemove( item ) }>Удалить</button>
        );
    }


