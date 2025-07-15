import React from 'react';
import { FormFieldAmount } from "./FormFieldAmount";
import { FormField } from "./FormField";
import { useTransactionForm } from "../../../hooks/useTransactionForm";

interface TransferFormProps {
    onClose?: () => void;
}

export const TransferForm: React.FC<TransferFormProps> = ( { onClose } ) => {
    const {
        inputElement,
        handleInputChange,
        errors,
    } = useTransactionForm( onClose );

    return (
        <form>
            <FormField errors={ errors?.amount }>
                <FormFieldAmount reference={ inputElement } change={ handleInputChange }/>
            </FormField>
        </form>
    )
}

