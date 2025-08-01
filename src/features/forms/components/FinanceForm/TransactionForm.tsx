import React from 'react';
import styles from './FinanceForm.module.scss';
import { FormFieldCategories } from "./FormFieldCategories";
import { FormFieldAmount } from "./FormFieldAmount";
import { FormFieldWallet } from "./FormFieldWallet";
import { FormFieldDate } from "./FormFieldDate";
import { useFinanceForm } from "../../hooks/useFinanceForm";
import { FormField } from "./FormField";
import { TransactionType } from "../../../transactions/types";
import { FormFieldSubmit } from "./FormFieldSubmit";

interface TransactionFormProps {
    transactionType: TransactionType;
    onClose?: () => void;
}

export const TransactionForm: React.FC<TransactionFormProps> = (
    {
        transactionType,
        onClose
    } ) => {
    const {
        inputElement,
        handleInputChange,
        errors,
        isSubmitting,
        handleSubmit,
    } = useFinanceForm( onClose );

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
                    <FormFieldSubmit isSubmitting={ isSubmitting }/>
                </FormField>
            </fieldset>
            <input type="hidden" name="transactionType" value={ transactionType }/>
        </form>
    );
}

