import React, { useState } from 'react';
import { FormFieldAmount } from "./FormFieldAmount";
import { FormField } from "./FormField";
import { useTransactionForm } from "../../../hooks/useTransactionForm";
import { FormFieldSubmit } from "./FormFieldSubmit";
import { FormFieldWallet } from "./FormFieldWallet";
import { WalletType } from "../../../types/wallets";

interface TransferFormProps {
    onClose?: () => void;
}

export const TransferForm: React.FC<TransferFormProps> = ( { onClose } ) => {
    const {
        inputElement,
        handleInputChange,
        errors,
        isSubmitting
    } = useTransactionForm( onClose );

    const [ fromWallet, setFromWallet ] = useState( WalletType.BANK_CARD );
    const [ toWallet, setToWallet ] = useState( WalletType.CASH );

    return (
        <form>
            <fieldset>
                <legend>Новый перевод</legend>
                <FormField errors={ errors?.amount }>
                    <FormFieldAmount reference={ inputElement } change={ handleInputChange }/>
                </FormField>

                <FormField>
                    <FormFieldWallet
                        change={ handleInputChange }
                        value={ fromWallet }
                        onChange={ setFromWallet }
                    />
                </FormField>

                <FormField>
                    <FormFieldWallet
                        change={ handleInputChange }
                        value={ toWallet }
                        onChange={ setToWallet }
                    />
                </FormField>

                <FormField>
                    <FormFieldSubmit isSubmitting={ isSubmitting }/>
                </FormField>
            </fieldset>
        </form>
    )
}

