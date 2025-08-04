import React from 'react';
import { WalletType } from "../../../wallets/types";

interface FormFieldWalletProps {
    change: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void;
    label?: string;
    name?: string;
    value?: WalletType;
    exclude?: WalletType;
    onChange?: ( type: WalletType ) => void;
}

export const FormFieldWallet: React.FC<FormFieldWalletProps> = (
    {
        change,
        label = "Счет",
        name = "walletType",
        value,
        exclude,
        onChange,
    } ) => {
    return (
        <>
            <label htmlFor={ name }>{ label }</label>
            <select id={ name }
                    value={ value }
                    name={ name }
                    className="px-1 mx-1"
                    onChange={ ( e ) => {
                        change( e );
                        onChange?.( e.target.value as WalletType );
                    } }>
                <option disabled={ exclude === WalletType.BANK_CARD } value={ WalletType.BANK_CARD }>Карта</option>
                <option disabled={ exclude === WalletType.CASH } value={ WalletType.CASH }>Наличные</option>
            </select>
        </>
    );
}

