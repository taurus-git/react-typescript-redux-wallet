import React from 'react';
import styles from './FinanceForm.module.scss';
import { FormFieldCategories } from "./FormFieldCategories";
import { FormFieldAmount } from "./FormFieldAmount";
import { FormFieldWallet } from "./FormFieldWallet";
import { FormFieldDate } from "./FormFieldDate";
import { useTransactionForm } from "../../../hooks/useTransactionForm";
import { FormField } from "./FormField";

interface TransactionFormProps {
    onClose?: () => void;
}

export const TransactionForm: React.FC<TransactionFormProps> = ( { onClose } ) => {
    const {
        inputElement,
        handleInputChange,
        errors,
        transactionType,
        isSubmitting,
        handleSubmit,
    } = useTransactionForm( onClose );

    return (
        <form onSubmit={ handleSubmit } className={ styles.financeForm }>
            <fieldset>
                <legend>Новая запись</legend>
                <FormField errors={ errors?.amount }>
                    <FormFieldAmount reference={ inputElement } change={ handleInputChange }/>
                </FormField>

                <FormField>
                    <FormFieldWallet change={ handleInputChange }/>
                </FormField>

                <FormField errors={ errors?.categoryId }>
                    <FormFieldCategories transactionType={ transactionType }
                                         change={ handleInputChange }/>
                </FormField>

                <FormField errors={ errors?.date }>
                    <FormFieldDate change={ handleInputChange }/>
                </FormField>

                <FormField>
                    <input
                        type="submit"
                        disabled={ isSubmitting }
                        value={ isSubmitting ? "Сохранение..." : "Сохранить" }/>
                </FormField>
            </fieldset>

        </form>
    );
}

