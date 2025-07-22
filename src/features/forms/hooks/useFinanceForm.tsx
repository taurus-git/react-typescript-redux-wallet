import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { createOperationCreator } from "../../transactions/utils/createOperationCreator";
import { TransactionType } from "../../transactions/types";
import {
    getBaseFormFields,
    getExpenseFormFields,
    getIncomeFormFields,
    getTransferFormFields
} from "../utils/formUtils";

import { useFormValidation } from "./useFormValidation";
import { FormFields, InputTypes } from "../types";

export const useFinanceForm = ( onClose?: () => void ) => {
    const dispatch = useDispatch<AppDispatch>();
    const { dispatchIncome, dispatchExpense, dispatchTransfer } = createOperationCreator( dispatch );
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

    const getFormFieldsByType = () => {

    }

    const dispatchActions = ( formFields: FormFields ) => {
        const { transactionType } = formFields;

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

    const createFormFields = ( formData: FormData ): FormFields => {
        const { transactionType } = getBaseFormFields( formData );

        switch ( transactionType ) {
            case TransactionType.EXPENSE :
                return getExpenseFormFields( formData );
            case TransactionType.INCOME :
                return getIncomeFormFields( formData );
            case TransactionType.TRANSFER :
                return getTransferFormFields( formData );
            default:
                throw new Error( `Unknown transaction type: ${ transactionType }` );
        }
    }

    const processSubmitting = ( e: React.FormEvent<HTMLFormElement> ) => {
        const form = e.currentTarget;
        const formData = new FormData( form );
        const formValid = isFormValid( formData );

        if ( !formValid ) return false;

        try {
            const formFields = createFormFields( formData );
            dispatchActions( formFields );
            form.reset();
            return true;
        } catch ( e ) {
            console.error( e );
            return false;
        }
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
