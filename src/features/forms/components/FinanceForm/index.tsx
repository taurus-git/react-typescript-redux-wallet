import React from 'react';
import styles from './FinanceForm.module.scss';
import { TransactionForm } from "./TransactionForm";
import { useFinanceForm } from "../../hooks/useFinanceForm";
import { FormFieldTransactionToggle } from "./FormFieldTransactionToggle";
import { TransactionType } from "../../../transactions/types";
import { TransferForm } from "./TransferForm";

interface FinanceFormProps {
    onClose?: () => void;
}

export const FinanceForm: React.FC<FinanceFormProps> = ( { onClose } ) => {
    const { transactionType, setTransactionType } = useFinanceForm( onClose );

    return (
        <div className={ `${ styles.financeForm } d-flex flex-col` }>

            <FormFieldTransactionToggle
                transactionType={ transactionType }
                setTransactionType={ setTransactionType }/>

            { transactionType === TransactionType.TRANSFER ?
                <TransferForm onClose={ onClose }/> :
                <TransactionForm
                    transactionType={ transactionType }
                    onClose={ onClose }/>
            }
        </div>
    );
}

