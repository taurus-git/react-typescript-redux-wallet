import React, { useEffect, useState } from 'react';
import { FormFieldFieldset } from "./FormFieldFieldset";
import { FormFieldAmount } from "./FormFieldAmount";
import { FormField } from "./FormField";
import { useFinanceForm } from "../../hooks/useFinanceForm";
import { FormFieldSubmit } from "./FormFieldSubmit";
import { FormFieldWallet } from "./FormFieldWallet";
import { FormFieldDate } from "./FormFieldDate";
import { WalletType } from "../../../wallets/types";
import { FORM_FIELD_NAMES } from "../../types";
import { TransactionType } from "../../../transactions/types";

interface TransferFormProps {
    onClose?: () => void;
}

export const TransferForm: React.FC<TransferFormProps> = ( { onClose } ) => {
    const {
        inputElement,
        handleInputChange,
        errors,
        isSubmitting,
        handleSubmit
    } = useFinanceForm( onClose );

    const [ fromWallet, setFromWallet ] = useState( WalletType.BANK_CARD );
    const [ toWallet, setToWallet ] = useState( WalletType.CASH );

    useEffect( () => {
        if ( fromWallet === toWallet ) {
            if ( fromWallet === WalletType.BANK_CARD ) {
                setToWallet( WalletType.CASH );
            } else if ( fromWallet === WalletType.CASH ) {
                setToWallet( WalletType.BANK_CARD );
            }
        }
    }, [ fromWallet, toWallet ] );

    return (
        <form onSubmit={ handleSubmit }>
            <FormFieldFieldset>
                <FormField errors={ errors?.amount }>
                    <FormFieldAmount reference={ inputElement } change={ handleInputChange }/>
                </FormField>

                <FormField>
                    <FormFieldWallet
                        change={ handleInputChange }
                        label="Со счета"
                        name={ FORM_FIELD_NAMES.fromWallet }
                        value={ fromWallet }
                        onChange={ setFromWallet }
                    />
                </FormField>

                <FormField>
                    <FormFieldWallet
                        change={ handleInputChange }
                        label="На счет"
                        name={ FORM_FIELD_NAMES.toWallet }
                        value={ toWallet }
                        exclude={ fromWallet }
                        onChange={ setToWallet }
                    />
                </FormField>

                <FormField errors={ errors?.date }>
                    <FormFieldDate change={ handleInputChange }/>
                </FormField>

                <FormField>
                    <FormFieldSubmit isSubmitting={ isSubmitting }/>
                </FormField>

                <input type="hidden" name="transactionType" value={ TransactionType.TRANSFER }/>
            </FormFieldFieldset>
        </form>
    )
}

