import React, { useEffect, useRef } from 'react';
import styles from './FinanceForm.module.scss';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { addExpense } from "../../../store/features/expenses/expensesSlice";
import { FormFieldCategories } from "./FormFieldCategories";
import { FormFieldAmount } from "./FormFieldAmount";
import { FormFieldAccount } from "./FormFielAccount";
import { FormFieldDate } from "./FormFieldDate";

interface FinanceFormProps {
    onClose?: () => void;
}

export const FinanceForm: React.FC<FinanceFormProps> = ( { onClose } ) => {
    const dispatch = useDispatch<AppDispatch>();
    const inputElement = useRef<HTMLInputElement>( null );


    const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        const formData = new FormData( e.currentTarget );
        const amount = formData.get( "amount" );

        dispatch( addExpense( {
            amount: Number(amount),
            categoryId: 'Продукты',
            date: 'сегодня'
        } ) );

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
                    <FormFieldAmount reference={ inputElement }/>
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldAccount/>
                </div>

                <div className={ `${ styles[ 'financeForm__field' ] }` }>
                    <FormFieldCategories/>
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

