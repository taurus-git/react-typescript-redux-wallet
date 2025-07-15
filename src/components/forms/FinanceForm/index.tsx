import React from 'react';
import styles from './FinanceForm.module.scss';
import { FormFieldCategories } from "./FormFieldCategories";
import { FormFieldAmount } from "./FormFieldAmount";
import { FormFieldWallet } from "./FormFieldWallet";
import { FormFieldDate } from "./FormFieldDate";
import { FormFieldTransactionToggle } from "./FormFieldTransactionToggle";
import { useFinanceForm } from "../../../hooks/useFinanceForm";
import { FormField } from "./FormField";

interface FinanceFormProps {
    onClose?: () => void;
}

export const FinanceForm: React.FC<FinanceFormProps> = ( { onClose } ) => {
    const {
        inputElement,
        handleInputChange,
        errors,
        transactionType,
        setTransactionType,
        isSubmitting,
        handleSubmit,
    } = useFinanceForm( onClose );

    return (
        <form onSubmit={ handleSubmit } className={ styles.financeForm }>
            <fieldset>
                <legend>Новая запись</legend>
                <FormField>
                    <FormFieldTransactionToggle transactionType={ transactionType }
                                                setTransactionType={ setTransactionType }/>
                </FormField>

                <FormField errors={errors?.amount}>
                    <FormFieldAmount reference={ inputElement } change={ handleInputChange }/>
                </FormField>

                <FormField>
                    <FormFieldWallet change={ handleInputChange }/>
                </FormField>

                <FormField errors={errors?.categoryId}>
                    <FormFieldCategories transactionType={ transactionType }
                                         change={ handleInputChange }/>
                </FormField>

                <FormField errors={errors?.date}>
                    <FormFieldDate change={ handleInputChange }/>
                </FormField>

                <FormField>
                    <input
                        type="submit"
                        disabled={ isSubmitting }
                        value={ isSubmitting ? "Сохранение..." : "Сохранить" } />
                </FormField>
            </fieldset>

        </form>
    );
}

