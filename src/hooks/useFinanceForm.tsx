import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { createTransactionDispatchers } from "../utils/transactionDispatcher";
import { TransactionType } from "../types/transactions";
import { useFormValidation } from "./useFormValidation";
import { getFormFields } from "../utils/formUtils";
import { InputTypes } from "../types/formFields";


export const useFinanceForm = ( onClose?: () => void ) => {
    const dispatch = useDispatch<AppDispatch>();
    const { dispatchIncome, dispatchExpense, dispatchTransfer } = createTransactionDispatchers( dispatch );
    const inputElement = useRef<HTMLInputElement>( null );
    const [ transactionType, setTransactionType ] = useState<TransactionType>( TransactionType.EXPENSE );
    const [ isSubmitting, setIsSubmitting ] = useState( false );
    const {
        errors,
        setErrors,
        isFormValid
    } = useFormValidation();

    const handleInputChange = ( e: React.ChangeEvent<InputTypes> ) => {
        const { name } = e.target;

        if ( errors && name in errors ) {
            setErrors( ( prev ) => ({
                ...prev,
                [ name ]: undefined
            }) )
        }
    }

    const dispatchActions = ( formFields: ReturnType<typeof getFormFields> ) => {
        switch ( transactionType ) {
            case TransactionType.INCOME :
                dispatchIncome( formFields );
                break;
            case TransactionType.EXPENSE :
                dispatchExpense( formFields );
                break;
            case TransactionType.TRANSFER :
                dispatchTransfer( formFields );
                break;
        }
    }

    const processSubmitting = ( e: React.FormEvent<HTMLFormElement> ) => {
        const form = e.currentTarget;
        const formData = new FormData( form );
        const formValid = isFormValid( formData );

        if ( !formValid ) return false;

        const formFields = getFormFields( formData );
        dispatchActions( formFields );
        form.reset();

        return true;
    }

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        if ( isSubmitting ) return;

        setIsSubmitting( true );

        try {
            const success = processSubmitting( e );

            if ( success ) {
                onClose?.();
            }
        } catch ( error ) {
            console.error( 'Error on the form submitting', error );
        } finally {
            setIsSubmitting( false );
        }
    }

    useEffect( () => {
        if ( inputElement ) {
            inputElement.current?.focus();
        }
    }, [] );

    return {
        inputElement,
        handleInputChange,
        errors,
        transactionType,
        setTransactionType,
        isSubmitting,
        handleSubmit,
    }
}
