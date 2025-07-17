import React from 'react';
import { TransactionForm } from "./TransactionForm";
import { useFinanceForm } from "../../../hooks/useFinanceForm";
import { FormFieldTransactionToggle } from "./FormFieldTransactionToggle";
import { FormField } from "./FormField";
import { TransactionType } from "../../../types/transactions";
import { TransferForm } from "./TransferForm";

interface FinanceFormProps {
    onClose?: () => void;
}

export const FinanceForm: React.FC<FinanceFormProps> = ( { onClose } ) => {
    const { transactionType, setTransactionType } = useFinanceForm( onClose );

    return (
        <div>
            <FormField>
                <FormFieldTransactionToggle transactionType={ transactionType }
                                            setTransactionType={ setTransactionType }/>
            </FormField>
            { transactionType === TransactionType.TRANSFER ?
                <TransferForm onClose={ onClose }/> :
                <TransactionForm
                    transactionType={ transactionType }
                    onClose={ onClose }/>
            }
        </div>
    );
}

