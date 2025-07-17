import React from 'react';
import styles from "./FinanceForm.module.scss";
import { Message } from "../../common/ErrorMessage/Message";

interface FormFieldProps {
    children: React.ReactNode;
    className?: string;
    errors?: string;
}

export const FormField: React.FC<FormFieldProps> = ( { className, children, errors } ) => {
    return (
        <div className={ `${ styles[ 'financeForm__field' ] } ${ className }` }>
            { children }
            { errors && <Message message={ errors }/> }
        </div>
    );
}

