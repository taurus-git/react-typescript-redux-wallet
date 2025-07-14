import React from 'react';
import styles from './FinanceForm.module.scss';
import { FormFieldCategories } from "./FormFieldCategories";
import { FormFieldAmount } from "./FormFieldAmount";
import { FormFieldWallet } from "./FormFieldWallet";
import { FormFieldDate } from "./FormFieldDate";
import { Message } from "../../common/ErrorMessage/Message";
import { FormFieldTransactionToggle } from "./FormFieldTransactionToggle";
import { useFinanceForm } from "../../../hooks/useFinanceForm";

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

