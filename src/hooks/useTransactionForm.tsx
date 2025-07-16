import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import React, { useEffect, useRef, useState } from "react";
import { TransactionType } from "../types/transactions";
import { WalletType } from "../types/wallets";
import { useFormValidation } from "./useFormValidation";
import { getFormFields } from "../utils/formUtils";
import { createCardExpense, createCardIncome } from "../store/features/bankCardSlice/bankCardSlice";
import { createCashExpense, createCashIncome } from "../store/features/cashSlice/cashSlice";
import { createExpense } from "../store/features/expenses/expensesSlice";
import { createIncome } from "../store/features/incomes/incomesSlice";
import { InputTypes } from "../types/formFields";

export const useTransactionForm = ( onClose?: () => void ) => {
    const dispatch = useDispatch<AppDispatch>();
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

    const dispatchIncome = ( formFields: ReturnType<typeof getFormFields> ) => {
        const { amount, walletType } = formFields;

        dispatch( createIncome( formFields ) );

        if ( walletType === WalletType.BANK_CARD ) {
            dispatch( createCardIncome( amount ) );
        } else if ( walletType === WalletType.CASH ) {
            dispatch( createCashIncome( amount ) );
        }
    }

    const dispatchExpense = ( formFields: ReturnType<typeof getFormFields> ) => {
        const { amount, walletType } = formFields;

        dispatch( createExpense( formFields ) );

        if ( walletType === WalletType.BANK_CARD ) {
            dispatch( createCardExpense( amount ) );
        } else if ( walletType === WalletType.CASH ) {
            dispatch( createCashExpense( amount ) );
        }
    }

    const dispatchTransfer = ( formFields: ReturnType<typeof getFormFields> ) => {
        const { amount, fromWallet, toWallet } = formFields;

        if ( fromWallet === toWallet ) return;

        if ( fromWallet === WalletType.BANK_CARD && toWallet === WalletType.CASH ) {
            dispatch( createCardExpense( amount ) );
            dispatch( createCashIncome( amount ) );
        } else if ( fromWallet === WalletType.CASH && toWallet === WalletType.BANK_CARD ) {
            dispatch( createCashExpense( amount ) );
            dispatch( createCardIncome( amount ) );
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
