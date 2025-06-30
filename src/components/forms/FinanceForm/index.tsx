import React, { useEffect, useRef } from 'react';
import styles from './FinanceForm.module.scss';
import { FormFieldCategories } from "./FormFieldCategories";
import { FormFieldAmount } from "./FormFieldAmount";
import { FormFieldAccount } from "./FormFielAccount";

interface FinanceFormProps {
    onClose?: () => void;
}

export const FinanceForm: React.FC<FinanceFormProps> = ( { onClose } ) => {
    const inputElement = useRef<HTMLInputElement>( null );


    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
    }

    /*    const handleAdd = () => {
            dispatch( addExpense( { accountId: '1', categoryId: 'Продукты', amount: 150, date: 'сегодня' } ) );
        }

        const handleRemove = ( id: string ) => {
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
                <div className={ styles.financeForm__field }>
                    <FormFieldAmount reference={ inputElement }/>
                </div>

                <div className={ styles.financeForm__field }>
                    <FormFieldAccount/>
                </div>

                <div className={ styles.financeForm__field }>
                    <FormFieldCategories/>
                </div>

                <div className={ styles.financeForm__field }>
                    //Todo: add date field
                </div>
                <div className={ styles.financeForm__field }>
                    {/*<button onClick={ onClose }>Сохранить</button>*/ }
                </div>
            </fieldset>

        </form>
    );
}

