import React from 'react';
import { WalletType } from "../../../types/wallets";

interface FormFieldWalletProps {
    change: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void,
}

export const FormFieldWallet: React.FC<FormFieldWalletProps> = ( { change } ) => {
    return (
        <>
            <label htmlFor="walletType">Счет</label>
            <select id="walletType" name='walletType' onChange={ change }>
                <option value={ WalletType.BANK_CARD }>Карта</option>
                <option value={ WalletType.CASH }>Наличные</option>
            </select>
        </>
    );
}

