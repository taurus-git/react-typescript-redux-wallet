import React from 'react';
import { WalletType } from "../../../types/wallets";

interface FormFieldWalletProps {
    change: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void;
    label?: string;
    name?: string;
    value?: WalletType;
    onChange?: ( type: WalletType ) => void;
}

export const FormFieldWallet: React.FC<FormFieldWalletProps> = (
    {
        change,
        label = "Счет",
        name = "walletType",
        value,
        onChange
    } ) => {
    return (
        <>
            <label htmlFor={ name }>{ label }</label>
            <select id={ name } value={ value } name={ name }
                    onChange={ ( e ) => {
                        change( e );
                        onChange?.( e.target.value as WalletType );
                    } }>
                <option value={ WalletType.BANK_CARD }>Карта</option>
                <option value={ WalletType.CASH }>Наличные</option>
            </select>
        </>
    );
}

