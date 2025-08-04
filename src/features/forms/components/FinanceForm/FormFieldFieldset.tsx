import styles from "./FinanceForm.module.scss";
import React from "react";

interface FormFieldFieldsetProps {
    children?: React.ReactNode;
}

export const FormFieldFieldset: React.FC<FormFieldFieldsetProps> = ( { children } ) => {
    return (
        <fieldset className={ `${ styles.financeForm__fieldset } border-none` }>
            <legend className="visually-hidden">Новая запись</legend>
            { children }
        </fieldset>
    );
};
