import React from 'react';
import { WalletType } from "../../../types/wallets";

interface FormFieldWalletProps {
    change: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void;
    value?: WalletType;
    onChange?: ( type: WalletType ) => void;
}

export const FormFieldWallet: React.FC<FormFieldWalletProps> = ( { change, value, onChange } ) => {
    return (
        <>
            <label htmlFor="walletType">Счет</label>
            <select id="walletType" value={ value } name='walletType'
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

