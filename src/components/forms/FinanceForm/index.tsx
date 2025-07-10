import React, { useEffect, useRef, useState } from 'react';
import styles from './FinanceForm.module.scss';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { createExpense } from "../../../store/features/expenses/expensesSlice";
import { createIncome } from "../../../store/features/incomes/incomesSlice";
import { Transaction, TransactionType } from "../../../types/transactions";
import { FormFieldCategories } from "./FormFieldCategories";
import { FormFieldAmount } from "./FormFieldAmount";
import { FormFieldWallet } from "./FormFieldWallet";
import { FormFieldDate } from "./FormFieldDate";
import { Message } from "../../common/ErrorMessage/Message";
import { FormFieldTransactionToggle } from "./FormFieldTransactionToggle";
import { WalletType } from "../../../types/wallets";

interface FinanceFormProps {
    onClose?: () => void;
}

export const FinanceForm: React.FC<FinanceFormProps> = ( { onClose } ) => {
    const dispatch = useDispatch<AppDispatch>();
    const inputElement = useRef<HTMLInputElement>( null );
    type FormErrors = Partial<Record<keyof Omit<Transaction, "id" | "comment">, string>>;
    type InputTypes = HTMLInputElement | HTMLSelectElement;
    const [ transactionType, setTransactionType ] = useState<TransactionType>( TransactionType.EXPENSE );
    const [ errors, setErrors ] = useState<FormErrors>();
    const [ isSubmitting, setIsSubmitting ] = useState( false );
    const FORM_FIELD_NAMES = {
        amount: "amount",
        categoryId: "categoryId",
        date: "date",
        comment: "comment",
        walletType: "walletType"
    } as const;
    const DEFAULT_FORM_VALUES = {
        amount: 0,
        categoryId: "",
        date: "",
        comment: undefined,
        walletType: WalletType.BANK_CARD,
    } as const;

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

    const dispatchTransaction = ( formFields: ReturnType<typeof getFormFields> ) => {
        const actions = {
            [ TransactionType.EXPENSE ]: () => dispatch( createExpense( formFields ) ),
            [ TransactionType.INCOME ]: () => dispatch( createIncome( formFields ) ),
        }

        return actions[ transactionType ]();
    }

    const processSubmitting = ( e: React.FormEvent<HTMLFormElement> ) => {
        const form = e.currentTarget;
        const formData = new FormData( form );
        const formValid = isFormValid( formData );

        if ( !formValid ) return;

        const formFields = getFormFields( formData );
        dispatchTransaction( formFields );
        form.reset();
    }

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        if ( isSubmitting ) return;

        setIsSubmitting( true );

        try {
            processSubmitting( e );
            onClose?.();
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

    return (
        <form onSubmit={ handleSubmit } className={ styles.financeForm }>
            <fieldset>
                <legend>Новая запись</legend>
                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldTransactionToggle transactionType={ transactionType }
                                                setTransactionType={ setTransactionType }/>
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldAmount reference={ inputElement } change={ handleInputChange }/>
                    { errors?.amount && <Message message={ errors.amount }/> }
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldWallet change={ handleInputChange }/>
                    {/*Todo: add error message for Account field*/ }
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldCategories transactionType={ transactionType }
                                         change={ handleInputChange }/>
                    { errors?.categoryId && <Message message={ errors.categoryId }/> }
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldDate change={ handleInputChange }/>
                    { errors?.date && <Message message={ errors.date }/> }
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <input
                        type="submit"
                        disabled={ isSubmitting }
                        value={ isSubmitting ? "Сохранение..." : "Сохранить" }
                    />
                </div>
            </fieldset>

        </form>
    );
}

