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
import { FormFieldFieldset } from "./FormFieldFieldset";

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
            <FormFieldFieldset>
                <FormField errors={ errors?.amount } className="d-flex justify-between align-center py-04 px-1">
                    <FormFieldAmount reference={ inputElement }
                                     change={ handleInputChange }/>
                </FormField>

                <FormField className="d-flex justify-between py-04 px-1">
                    <FormFieldWallet change={ handleInputChange }/>
                </FormField>

                <FormField errors={ errors?.categoryId }
                           className="d-flex flex-col justify-center align-center py-04 px-1">
                    <FormFieldCategories transactionType={ transactionType }
                                         change={ handleInputChange }/>
                </FormField>

                <FormField errors={ errors?.date } className="d-flex justify-center align-center py-04 px-1">
                    <FormFieldDate change={ handleInputChange }/>
                </FormField>

                <FormField className="d-flex align-center">
                    <FormFieldSubmit isSubmitting={ isSubmitting }/>
                </FormField>
                <input type="hidden" name="transactionType" value={ transactionType }/>
            </FormFieldFieldset>
        </form>
    );
}

