import React from 'react';
import styles from "./FinanceForm.module.scss";
import { Message } from "../ErrorMessage/Message";

interface FormFieldProps {
    children: React.ReactNode;
    className?: string;
    errors?: string;
}

export const FormField: React.FC<FormFieldProps> = ( { className, children, errors } ) => {
    return (
        <div className={ `${ styles[ 'financeForm__field' ] } ${ className } d-flex` }>
            { children }
            { errors && <Message message={ errors }/> }
        </div>
    );
}

