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
    const [ errors, setErrors ] = useState<Partial<Record<keyof Omit<Expense, "id" | "comment">, string>>>();


    console.log(errors);

    const getFormFields = ( formData: FormData ) => {
        return {
            amount: Number( formData.get( "amount" ) ),
            categoryId: String( formData.get( "categoryId" ) ),
            date: String( formData.get( "date" ) ),
            comment: String( formData.get( "comment" ) )
        }
    }

    const isFormValid = ( formData: FormData ) => {
        const { amount, categoryId, date } = getFormFields( formData );
        const errorMessages: typeof errors = {};

        if ( !amount || amount <= 0 ) {
            errorMessages.amount = "Введите корректную сумму";
        }

        console.log(categoryId);

        if ( !categoryId ) {
            errorMessages.categoryId = "Укажите категорию";
        }

        if ( !date ) {
            errorMessages.date = "Установите дату";
        }

        setErrors( errorMessages );
        return Object.keys( errorMessages ).length === 0;
    }

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const { name, value } = e.target;

        console.log( name, value );

        if ( errors !== undefined ) {

            if ( errors[ name as keyof typeof errors ] ) {
                setErrors( ( prev ) => ({
                    ...prev,
                    [ name ]: undefined
                }) )
            }
        }
    }

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const formData = new FormData( e.currentTarget );

        const formValid = isFormValid( formData );
        if ( !formValid ) return;

        const formFields = getFormFields( formData );

        dispatch( addExpense( formFields ) );
    }

    /*const handleRemove = ( id: string ) => {
        dispatch( removeExpense( id ) );
    }*/

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
                    <FormFieldAmount reference={ inputElement } change={ handleChange }/>
                    { errors?.amount && <Message message={ errors.amount }/> }
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldAccount change={ handleChange }/>
                    {/*Todo: add error message for Account field*/ }
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldCategories change={ handleChange }/>
                    { errors?.categoryId && <Message message={ errors.categoryId }/> }
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldDate/>
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <input type="submit" value="Сохранить"/>
                    {/*Todo: add grey / blue color button depends on fields filled in*/ }
                    {/*Todo: add onClose event if fields filled in*/ }
                </div>
            </fieldset>

        </form>
    );
}

