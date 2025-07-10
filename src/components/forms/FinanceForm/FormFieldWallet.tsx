import React from 'react';

interface FormFieldWalletProps {
    change: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void,
}

export const FormFieldWallet: React.FC<FormFieldWalletProps> = ( { change } ) => {
    return (
        <>
            <label htmlFor="walletType">Счет</label>
            <select id="walletType" name='walletType' onChange={ change }>
                <option value="bank card">Карта</option>
                <option value="cash">Наличные</option>
            </select>
        </>
    );
}

