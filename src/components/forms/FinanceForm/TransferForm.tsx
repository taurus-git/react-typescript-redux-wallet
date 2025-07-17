import React, { useEffect, useState } from 'react';
import { FormFieldAmount } from "./FormFieldAmount";
import { FormField } from "./FormField";
import { useFinanceForm } from "../../../hooks/useFinanceForm";
import { FormFieldSubmit } from "./FormFieldSubmit";
import { FormFieldWallet } from "./FormFieldWallet";
import { WalletType } from "../../../types/wallets";
import { FORM_FIELD_NAMES } from "../../../types/formFields";
import { TransactionType } from "../../../types/transactions";

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
            <fieldset>
                <legend>Новый перевод</legend>
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

                <FormField>
                    <FormFieldSubmit isSubmitting={ isSubmitting }/>
                </FormField>

                <input type="hidden" name="transactionType" value={ TransactionType.TRANSFER }/>
            </fieldset>
        </form>
    )
}

