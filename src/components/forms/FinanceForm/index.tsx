import React, { useEffect, useRef, useState } from 'react';
import styles from './FinanceForm.module.scss';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { addExpense } from "../../../store/features/expenses/expensesSlice";
import { FormFieldCategories } from "./FormFieldCategories";
import { FormFieldAmount } from "./FormFieldAmount";
import { FormFieldAccount } from "./FormFielAccount";
import { FormFieldDate } from "./FormFieldDate";
import { Message } from "../../common/ErrorMessage/Message";
import { Expense } from "../../../store/features/expenses/types";

interface FinanceFormProps {
    onClose?: () => void;
}

export const FinanceForm: React.FC<FinanceFormProps> = ( { onClose } ) => {
    const dispatch = useDispatch<AppDispatch>();
    const inputElement = useRef<HTMLInputElement>( null );
    type FormErrors = Partial<Record<keyof Omit<Expense, "id" | "comment">, string>>;
    type InputTypes = HTMLInputElement | HTMLSelectElement;
    const [ errors, setErrors ] = useState<FormErrors>();
    const [ isSubmitting, setIsSubmitting ] = useState( false );

    const FORM_FIELD_NAMES = {
        amount: "amount",
        categoryId: "categoryId",
        date: "date",
        comment: "comment",
    } as const;

    const DEFAULT_FORM_VALUES = {
        amount: 0,
        categoryId: "",
        date: "",
        comment: undefined,
    } as const;

    const getFormFields = ( formData: FormData ) => {
        return {
            amount: Number( formData.get( FORM_FIELD_NAMES.amount ) ) || DEFAULT_FORM_VALUES.amount,
            categoryId: String( formData.get( FORM_FIELD_NAMES.categoryId ) ) || DEFAULT_FORM_VALUES.categoryId,
            date: String( formData.get( FORM_FIELD_NAMES.date ) ) || DEFAULT_FORM_VALUES.date,
            comment: String( formData.get( FORM_FIELD_NAMES.comment ) ) || DEFAULT_FORM_VALUES.comment,
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

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        if ( isSubmitting ) return;

        const form = e.currentTarget;
        const formData = new FormData( form );
        const formValid = isFormValid( formData );
        if ( !formValid ) return;

        setIsSubmitting( true );

        try {
            const formFields = getFormFields( formData );
            dispatch( addExpense( formFields ) );
            form.reset();
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
                    <FormFieldAmount reference={ inputElement } change={ handleInputChange }/>
                    { errors?.amount && <Message message={ errors.amount }/> }
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldAccount change={ handleInputChange }/>
                    {/*Todo: add error message for Account field*/ }
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldCategories change={ handleInputChange }/>
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

