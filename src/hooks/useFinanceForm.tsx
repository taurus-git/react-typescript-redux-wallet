import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import React, { useEffect, useRef, useState } from "react";
import { TransactionType } from "../types/transactions";
import { WalletType } from "../types/wallets";
import { createCardExpense, createCardIncome } from "../store/features/bankCardSlice/bankCardSlice";
import { createCashExpense, createCashIncome } from "../store/features/cashSlice/cashSlice";
import { createExpense } from "../store/features/expenses/expensesSlice";
import { createIncome } from "../store/features/incomes/incomesSlice";
import { FORM_FIELD_NAMES, DEFAULT_FORM_VALUES, FormErrors, InputTypes } from "../types/formFields";

export const useFinanceForm = ( onClose?: () => void ) => {
    const dispatch = useDispatch<AppDispatch>();
    const inputElement = useRef<HTMLInputElement>( null );
    const [ transactionType, setTransactionType ] = useState<TransactionType>( TransactionType.EXPENSE );
    const [ errors, setErrors ] = useState<FormErrors>();
    const [ isSubmitting, setIsSubmitting ] = useState( false );

    const getFormFields = ( formData: FormData ) => {
        return {
            amount: Number( formData.get( FORM_FIELD_NAMES.amount ) ) || DEFAULT_FORM_VALUES.amount,
            categoryId: String( formData.get( FORM_FIELD_NAMES.categoryId ) ) || DEFAULT_FORM_VALUES.categoryId,
            date: String( formData.get( FORM_FIELD_NAMES.date ) ) || DEFAULT_FORM_VALUES.date,
            comment: String( formData.get( FORM_FIELD_NAMES.comment ) ) || DEFAULT_FORM_VALUES.comment,
            walletType: (formData.get( FORM_FIELD_NAMES.walletType ) as WalletType) || DEFAULT_FORM_VALUES.walletType,
        }
    }

    const isFormValid = ( formData: FormData ) => {
        const { amount, categoryId, date } = getFormFields( formData );
        const errorMessages: typeof errors = {};

        if ( !amount || amount <= 0 ) {
            errorMessages.amount = "Введите корректную сумму";
        }

        if ( !categoryId ) {
            errorMessages.categoryId = "Укажите категорию";
        }

        if ( !date ) {
            errorMessages.date = "Установите дату";
        }

        setErrors( errorMessages );
        return Object.keys( errorMessages ).length === 0;
    }

    const handleInputChange = ( e: React.ChangeEvent<InputTypes> ) => {
        const { name } = e.target;

        if ( errors && name in errors ) {
            setErrors( ( prev ) => ({
                ...prev,
                [ name ]: undefined
            }) )
        }
    }

    const dispatchToWallet = ( formFields: ReturnType<typeof getFormFields> ) => {
        const { amount, walletType } = formFields;

        const walletActions = {
            [ TransactionType.INCOME ]: {
                [ WalletType.BANK_CARD ]: () => dispatch( createCardIncome( amount ) ),
                [ WalletType.CASH ]: () => dispatch( createCashIncome( amount ) ),
            },
            [ TransactionType.EXPENSE ]: {
                [ WalletType.BANK_CARD ]: () => dispatch( createCardExpense( amount ) ),
                [ WalletType.CASH ]: () => dispatch( createCashExpense( amount ) ),
            }
        }

        return walletActions[ transactionType ][ walletType ]();
    }

    const dispatchTransaction = ( formFields: ReturnType<typeof getFormFields> ) => {
        const actions = {
            [ TransactionType.EXPENSE ]: () => dispatch( createExpense( formFields ) ),
            [ TransactionType.INCOME ]: () => dispatch( createIncome( formFields ) ),
        };

        return actions[ transactionType ]();
    }

    const processSubmitting = ( e: React.FormEvent<HTMLFormElement> ) => {
        const form = e.currentTarget;
        const formData = new FormData( form );
        const formValid = isFormValid( formData );

        if ( !formValid ) return false;

        const formFields = getFormFields( formData );
        dispatchTransaction( formFields );
        dispatchToWallet( formFields );
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
